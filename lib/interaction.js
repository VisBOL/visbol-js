
var Segment = require('./segment'),
    Entity = require('./entity'),
    Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2')
    Matrix = require('./geom/matrix'),
    Linker = require('./linker'),
    Colors = require('./colorLibrary/color')
    Composite = require('../font/sbolv/protein')

function renderInteraction(design, interaction) {
       
    var segmentPos = Matrix();
     var segments =  [];

    if (interaction.type === "inhibition") {
           
     for (let i in interaction.participants) {
        
        if (interaction.participants[i].role === "inhibitor") {
           interaction.participants[i].segment.role = "inhibitor";
        }

        interaction.participants[i].segment.isParticipant = true;
        var segment = Segment.render(design, interaction.participants[i].segment);
        if (interaction.participants[i].role === "inhibitor")
            segment.dy(-90);
        
       segments.push(segment);
      }
    }

     else if (interaction.type === "genetic-production") {
           
     for (let i in interaction.participants) {
        
        if (interaction.participants[i].role === "product") {
           interaction.participants[i].segment.role = "product";
        }

        interaction.participants[i].segment.isParticipant = true;
        var segment = Segment.render(design, interaction.participants[i].segment);
        if (interaction.participants[i].role === "product")
            segment.dy(-90);
        
       segments.push(segment);
      }
    }
    

   var group = design.surface.group();
   segments.forEach(group.add.bind(group));
  
    //entities.forEach(group.add.bind(group));

   // design.linkInteractions(group);

    var boundingBox = Rect.expand(
        Rect(group.bbox()), design.geom.componentBoxPadding);

    var box = design.surface.rect(
        Rect.width(boundingBox), Rect.height(boundingBox) - 5);

    box.transform({ matrix:
          Matrix.toSVGString(Matrix.translation(boundingBox.topLeft)) });

    box.radius(8);

    box.attr('stroke', segment.color || 'purple');
    box.attr('stroke-width', segment.thickness || '5px');
    box.attr('stroke-linejoin', 'round');
    box.attr('fill', 'none');

    group.add(box);
    //var interactionLabel = interaction.name || interaction.displayId
    if(interaction.displayId !== undefined) {

        var labelText = design.surface.text('');
        labelText.font({ anchor: 'left' });
        labelText.build(true);

        var label = labelText.tspan(interaction.displayId);

        label.attr('alignment-baseline', 'middle');
        labelText.build(false);

        /*labelText.transform({
            matrix: Matrix.toSVGString
                (Matrix.translation(Vec2(-100, -100))) });*/
        labelText.dy(-box.bbox().height - 5 - 20)
        labelText.dx(-100)
        group.add(labelText);
       
    }

    group.displayList = segment;
    interaction.svg = group;

    return group;
}

module.exports = {
    render: renderInteraction
}
