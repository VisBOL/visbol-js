
var Segment = require('./segment'),
    Entity = require('./entity'),
    Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2')
    Matrix = require('./geom/matrix'),
    Linker = require('./linker');
        
function renderComponent(design, component) {

    
    //populating compositeGlyph array
    let compositeGlyphs = [];
    for (let i = 0; i < component.segments.length; ++i) { 
      if ( component.segments[i].sequence.length > 1 ) {
        compositeGlyphs.push(component.segments[i].name);
      }
    }

    var segmentPos = Matrix();

    var segments = component.segments.map(function(segment) {
     
         
        //labeling composite glyphs in segment sequences 
        for (let i in compositeGlyphs) {
           for (let j in segment.sequence) {
             if (segment.sequence[j].name === compositeGlyphs[i]) 
               segment.sequence[j].isComposite = true;
           } 
        }
         
        var segment = Segment.render(design, segment);

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

    design.linkInteractions(group);

    var boundingBox = Rect.expand(
        Rect(group.bbox()), design.geom.componentBoxPadding);

    var box = design.surface.rect(
        Rect.width(boundingBox), Rect.height(boundingBox));

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

