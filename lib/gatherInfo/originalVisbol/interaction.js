
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

/*
* helper function to sort interactions on top of circuit
* this method puts all the interactinos of type stimulation and inhibtion
* to the left of interactions of type genetic production
*/
function sortInteractions(interactionsList) {
    
    let interactions = interactionsList;
    let currentProductionIndex = interactions.length - 1;
    let numProduction = 0;

    for (interaction of interactionsList) {

        if (interaction.SBO === "SBO:0000589") {
           numProduction++;
        }
    }
    
    for (let i = 0; i < interactionsList.length - numProduction; ++i) {

        if (interactionsList[i].SBO === "SBO:0000589") {
           temp = interactionsList[currentProductionIndex];
           interactionsList[currentProductionIndex] = interactionsList[i];
           interactionsList[i] = temp;
           currentProductionIndex--;
        }
    }
}
   
function renderInteraction(design, combinedInteraction, interactions) {
         
    var interactionPos = Matrix();
    var segments =  []; 
    let pos = 0 
    onDNAsVerticalOffset = 0;
    
    if (combinedInteraction.segment) {

       //first sort the interactions
       sortInteractions(combinedInteraction['interactions']);
       
       if (combinedInteraction.segment.sequence.length > 1) {
            combinedInteraction.segment.isCircuit = true;
        }
        combinedInteraction.segment.isParticipant = true;
        var segment = Segment.render(design, combinedInteraction.segment, interactions);
        segments.push(segment)

        if (combinedInteraction.interactions.length === 1) {
             nonDNAshorizontalOffset = (segment.bbox().width)/2
        }
        else if (combinedInteraction.interactions.length > 1) {
           numInteraction = combinedInteraction.interactions.length
           nonDNAshorizontalOffset = (segment.bbox().width - (design.geom.defaultGlyphSize.x * numInteraction))/numInteraction
        }
 
        for (interaction of combinedInteraction['interactions']) {

             if (interaction.SBO === "SBO:0000169") {
      
                Inhibition.render(design, interaction, segments, interactions, nonDNAshorizontalOffset);
                nonDNAshorizontalOffset += segments[segments.length -1].bbox().width + 50 
             }

             else if (interaction.SBO === "SBO:0000589") {
       
                Production.render(design, interaction, segments, interactions, nonDNAshorizontalOffset);
                nonDNAshorizontalOffset += segments[segments.length -1].bbox().width + 50 
             }
  
             else if (interaction.SBO === "SBO:0000170") {
      
                Stimulation.render(design, interaction, segments, interactions, nonDNAshorizontalOffset);
                nonDNAshorizontalOffset += segments[segments.length -1].bbox().width + 50       
             }
       }
    }
   else {
    
    if (combinedInteraction.SBO === "SBO:0000177") {
       nonCovelantBinding.render(design, combinedInteraction, segments, interactions);
    }
  
    else if (combinedInteraction.SBO === "SBO:0000179") {
       Degradation.render(design, combinedInteraction, segments, interactions); 
    }

    else {
      console.log("CombinedInteraction", combinedInteraction)
      console.log("Unknown interaction type")
      return;
    }
    
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
     
    var labelTextString = '';
    if(combinedInteraction.segment !== undefined) {
       labelTextString = combinedInteraction.segment.name + " interactions";
    }
    else if(combinedInteraction.displayId !== undefined) {
       labelTextString = combinedInteraction.displayId;
    }
    
    var labelText = design.surface.text('');
    labelText.font({ anchor: 'left' });
    labelText.build(true);

    var label = labelText.tspan(labelTextString);

    label.attr('alignment-baseline', 'middle');
    labelText.build(false);

        
    labelText.dy(-box.bbox().height)
    labelText.dx(-100)
    group.add(labelText);
  
    group.displayList = segments;
    return group;
}

module.exports = {
    render: renderInteraction
}
