
var Segment = require('./segment'),
    Entity = require('./entity'),
    Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2')
    Matrix = require('./geom/matrix'),
    Linker = require('./linker'),
    Colors = require('./colorLibrary/color')

let helper = {};

/*
*this is a helper method which returns true if array of interactions 
*is not null and it contains atleast one interaction of type "non-covelant-binding"
*/
helper.has_non_covelant_binding = function(interactions) {

  if (!interactions) {
    return false;
  }
  else {
    for (interaction of interactions) {
      //this is SBO for non-covelant-binding
      if (interaction.SBO === "SBO:0000177") {
        return true;
      }
    }
    return false;
  }
}

/*
*this is a helper method which returns true if sequence in the segment parameter
*has at least 3 elements in it 
*/
helper.segment_has_three_parts = function(segment) {

  if (!segment) {
    return false;
  }
  if (segment.sequence.length >= 3) {
    return true;
  }
  return false;
}

/*
* this is a helper method which returns true if the segment is a participant in an interaction
*/
helper.circuit_is_participant = function(segment, interactions) {

   if (!segment || !interactions) {
     return false;
   }
   else {
     for (interaction of interactions) {
       for (participant of interaction.participants) {
         if (participant.SO && segment.name === participant.name) {
           return true; 
         }
       }
     }
     return false;
   }
}

function renderComponent(design, component, interactions) {
      
    //initializing color object for coloring sub part labels
    let colors = {};
    colors.colors = Colors.colors;
    colors.colorIndex = 0;

   //populating compositeGlyph array
    let compositeGlyphs = [];
    for (let i = 0; i < component.segments.length; ++i) {
      if ( component.segments[i].sequence.length > 1 ||
           (component.segments[i].sequence.length === 1 && component.segments[i].name !== component.segments[i].sequence[0].name)) {
        compositeGlyphs.push({name: component.segments[i].name, segmentIndex: i});
      }
    }

   //detecting composite glyphs and coloring composite parts  and their subpart labels
    for (let i = 0; i < component.segments.length; ++i) {
      for (let j in compositeGlyphs) {
        for (let k in component.segments[i].sequence) {
          if ( component.segments[i].sequence[k].name === compositeGlyphs[j].name)  {
            component.segments[i].sequence[k].isComposite = true;
            if ( colors.colorIndex < colors.colors.length ) {
              //set the label color for composite glyph
              component.segments[i].sequence[k].labelColor = colors.colors[colors.colorIndex].colorName;
              //set the label color for subParts
              component.segments[compositeGlyphs[j].segmentIndex].labelColor = colors.colors[colors.colorIndex++].colorName;
            }
          }
        }
      }
    }
    
    //removing segments participating in interactions from component
    if (interactions.length !== 0) {
      var componentSegments = [];
      for (segment of component.segments) {
        if (segment.sequence.length == 1 || !helper.circuit_is_participant(segment, interactions)) {
          componentSegments.push(segment);    
        }
      }
      component.segments = componentSegments;
    }

    //this variable will be set to true if there is atleast one segment with at least 3 elements  
    var has_three_element_segment = false;
    
    var segmentPos = Matrix();

    var segments = component.segments.map(function(segment) {

        /*
        *since we are looking for one segment having 3 elements, we just count number 
        *of parts in segment.sequence if has_three_element_segment is false
        */
        if (!has_three_element_segment) {
          has_three_element_segment = helper.segment_has_three_parts(segment);
        }
        
        var segment = Segment.render(design, segment, interactions);

        var boundingBox = Rect(segment.bbox());

        var segmentOffset = Vec2(-boundingBox.topLeft.x, -boundingBox.topLeft.y);

        var segmentTransform = Matrix.multiply( Matrix.translation(segmentOffset), segmentPos );

        if(component.segments.length > 1) {

            segment.transform({ matrix: Matrix.toSVGString(segmentTransform) });

            segmentPos = Matrix.multiply(segmentPos,
                        Matrix.translation(Vec2(
                            0, Rect.height(boundingBox) + design.geom.segmentPadding)));
        }

        return segment;
    });

    var group = design.surface.group();

    segments.forEach(group.add.bind(group));

    var entities = component.entities.map(function(entityObject) {

        var entity = Entity.render(design, entityObject);

        entity.move(10, 10);

        return entity;
    });

    entities.forEach(group.add.bind(group));

    var componenetBoxPadding = 0;
    //design.linkInteractions(group); //has to be commented out , now that interactions are added, it doesn't work

    if (interactions.length !== 0 ) {
       componentBoxPadding = 2 * design.geom.componentBoxPadding;
    }
    else {
     componentBoxPadding = design.geom.componentBoxPadding;
    }

    /*if (helper.has_non_covelant_binding(interactions) && !has_three_element_segment) {
       componentBoxPadding = 4 * componentBoxPadding;
    }*/

    var boundingBox = Rect.expand(
        Rect(group.bbox()), componentBoxPadding);

    var widthPadding = 0;

    if (helper.has_non_covelant_binding(interactions) && !has_three_element_segment) {
      widthPadding = 180;   
    }
    
      
    /*var box = design.surface.rect(
        // right now defaultInteractionHeight is set to a static value, might be a toDo for later to set its value dynamically 
        Rect.width(boundingBox) + widthPadding, Rect.height(boundingBox) + interactions.length * (design.geom.interactionPadding + design.geom.defaultInteractionHeight));*/
  
    var box = design.surface.rect(
        // right now defaultInteractionHeight is set to a static value, might be a toDo for later to set its value dynamically 
        Rect.width(boundingBox) + widthPadding, Rect.height(boundingBox));
   
    //store the height of component 
    design.geom.componentHeight = group.bbox().height;
 
    //store the height of component bounding bounding box
    design.geom.componentBoxHeight = box.bbox().height;
   //initialize interaction position 
    //design.geom.interactionPosition = design.geom.componentBoxHeight;
    design.geom.interactionPosition = design.geom.componentHeight;
     
    box.transform({ matrix:
          Matrix.toSVGString(Matrix.translation(boundingBox.topLeft)) });

    box.radius(8);

    box.attr('stroke', component.color || 'black');
    box.attr('stroke-width', component.thickness || '2px');
    box.attr('stroke-linejoin', 'round');
    box.attr('fill', 'none');

    group.add(box);

    group.displayList = component;
    component.svg = group;

    return group;
}

module.exports = {
    render: renderComponent
}
