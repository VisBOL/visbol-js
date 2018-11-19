
var Segment = require('./segment'),
    Inhibition = require('./interactions/inhibition'),
    Production = require('./interactions/production'),
    Stimulation = require('./interactions/stimulation'),
    nonCovelantBinding = require('./interactions/non-covelant-binding'),
    Degradation = require('./interactions/degradation'),
    Entity = require('./entity'),
    Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2'),
    Matrix = require('./geom/matrix')

   
function renderInteraction(design, interaction, interactions) {
         
    var interactionPos = Matrix();
    var segments =  []; 
    let pos = 0 
     
    if (interaction.SBO === "SBO:0000169") {
      
      Inhibition.render(design, interaction, segments, interactions); 
    }

    else if (interaction.SBO === "SBO:0000589") {
       
      Production.render(design, interaction, segments, interactions); 
       
    }
  
    else if (interaction.SBO === "SBO:0000170") {
      
      Stimulation.render(design, interaction, segments, interactions);       
       
    }

    else if (interaction.SBO === "SBO:0000177") {
      
      nonCovelantBinding.render(design, interaction, segments, interactions); 
       
    }
  
     else if (interaction.SBO === "SBO:0000179") {
      
      Degradation.render(design, interaction, segments, interactions); 
    }

    else {
      console.log("Unknown interaction type")
      return;
    }
    

   var group = design.surface.group();
   segments.forEach(group.add.bind(group));
 
    var boundingBox = Rect.expand(
        Rect(group.bbox()), design.geom.componentBoxPadding);

    var box = design.surface.rect(
        Rect.width(boundingBox), Rect.height(boundingBox) - 5);

    box.transform({ matrix:
          Matrix.toSVGString(Matrix.translation(boundingBox.topLeft)) });

    box.radius(8);

    box.attr('stroke', 'purple');
    box.attr('stroke-width', '2px');
    box.attr('stroke-linejoin', 'round');
    box.attr('fill', 'none');

    group.add(box);
    design.geom.interactionPosition = design.geom.interactionPosition + group.bbox().height + design.geom.interactionPadding;
     
    
    if(interaction.displayId !== undefined) {

        var labelText = design.surface.text('');
        labelText.font({ anchor: 'left' });
        labelText.build(true);

        var label = labelText.tspan(interaction.displayId);

        label.attr('alignment-baseline', 'middle');
        labelText.build(false);

        
        labelText.dy(-box.bbox().height)
        labelText.dx(-100)
        group.add(labelText);
       
    }

    group.displayList = segments;
    interaction.svg = group;

    return group;
}

module.exports = {
    render: renderInteraction
}
