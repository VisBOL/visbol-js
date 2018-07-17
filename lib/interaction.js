
var Segment = require('./segment'),
    Entity = require('./entity'),
    Rect = require('./geom/rect'),
    Vec2 = require('./geom/vec2')
    Matrix = require('./geom/matrix'),
    Linker = require('./linker')

   
function renderInteraction(design, interaction) {
       
    var interactionPos = Matrix();
    var segments =  []; 
    let pos = 0 
     
    if (interaction.type === "inhibition") {
 
      /*
      *here we sort participants, since position of nonDnA deponds on position of DNA part for this type of interaction, 
      *DNA part should always come first
      */
      if (interaction.participants[1].SO) {
        let temp = null;
        temp = interaction.participants[0];
        interaction.participants[0] = interaction.participants[1];
        interaction.participants[1] = temp;
      }             
           
     for (let i in interaction.participants) {

         //if participant is a Dna part
          if (interaction.participants[i].SO) {
              
              DNAPartName = interaction.displayId.split("_");
               
             //find the part in the sequence which has the role of the template, and set a flag 
              for (var k in interaction.participants[i].segment.sequence) {
               if (interaction.participants[i].segment.sequence[k].name === DNAPartName[1]) {
                     
                  design.geom.templateOffset = parseInt(k)
               }
             }
          }
        
        if (interaction.participants[i].role === "inhibitor") {
           interaction.participants[i].segment.role = "inhibitor";
        }

        interaction.participants[i].segment.isParticipant = true;
        var segment = Segment.render(design, interaction.participants[i].segment);
        if (interaction.participants[i].role === "inhibitor") {
            segment.dy(-90);
            if (design.geom.templateOffset !== 0 ) {
              segment.dx( (design.geom.templateOffset -1) * (design.geom.defaultGlyphSize.x + design.geom.glyphPadding)
                                                          + design.geom.glyphPadding + design.geom.defaultGlyphSize.x/2 + 25)
            }
            else if (design.geom.templateOffset === 0) {
              segment.dx(0)
            }

        }
        
       segments.push(segment);
      }
    }

    else if (interaction.type === "genetic-production") {
       
       /*
      *here we sort participants, since position of nonDnA deponds
      *on position of DNA part for this type of interaction, 
      *DNA part should always come first so when irterating through  
      *interactions.participants we always find DNA part first
      */
       if (interaction.participants[1].SO) {
        let temp = null;
        temp = interaction.participants[0];
        interaction.participants[0] = interaction.participants[1];
        interaction.participants[1] = temp;
       } 
            
       for (let i in interaction.participants) {
        
          //if participant is a Dna part
          if (interaction.participants[i].SO) {

             DNAPartName = interaction.displayId.split("_");
             
             //find the part in the sequence which has the role of the template, and set a flag 
             for (var j in interaction.participants[i].segment.sequence) {
               if (interaction.participants[i].segment.sequence[j].name === DNAPartName[0]) {
                            
                 design.geom.templateOffset = parseInt(j)
                                
               }
            }
          }

          if (interaction.participants[i].role === "template") {
             interaction.participants[i].segment.role = "genetic-production";
          }

          if (interaction.participants[i].role === "product") {
             interaction.participants[i].segment.role = "product";
          }

          interaction.participants[i].segment.isParticipant = true;
          var segment = Segment.render(design, interaction.participants[i].segment);
          if (interaction.participants[i].role === "product") {
            segment.dy(-90);
            if (design.geom.templateOffset !== 0 ) {
              segment.dx( (design.geom.templateOffset -1) * (design.geom.defaultGlyphSize.x + design.geom.glyphPadding)
                                                         + design.geom.glyphPadding + design.geom.defaultGlyphSize.x/2)
            }
            else if (design.geom.templateOffset === 0) {
              segment.dx(0)
            }
          }
         segments.push(segment);
      }
    }
  
    else if (interaction.type === "simulation") {
            
       for (let i in interaction.participants) {
        
          if (interaction.participants[i].role === "simulator") {
             interaction.participants[i].segment.role = "simulator";
          }
          
          interaction.participants[i].segment.isParticipant = true;
          var segment = Segment.render(design, interaction.participants[i].segment);
          if (interaction.participants[i].role === "simulator")
            segment.dy(-120);
        
         segments.push(segment);
      }
    }

    else if (interaction.type === "non-covelant-binding") {
      
      /*sort the participants so that participant whose role 
      *is product is always at index 1, in the middle
      *so the other reactants can both point to that
      */
      for (let i = 0; i < 3 ; i++) {

         if (interaction.participants[i].role === "product" && i === 1) {
            break;
         }
         else if (interaction.participants[i].role === "product") {
           let temp = interaction.participants[1]
           interaction.participants[1] = interaction.participants[i];
           interaction.participants[1] = temp
         } 
      }

     
      let reactantNumber = 0;
      for (let i in interaction.participants) {
          
          if (interaction.participants[i].role === "product") {

             interaction.participants[i].segment.role = "reactantProduct";
          }

          if (interaction.participants[i].role === "reactant") {
              reactantNumber++;
              interaction.participants[i].segment.role = "reactant" + reactantNumber;
          }
          
          interaction.participants[i].segment.isParticipant = true;
          var segment = Segment.render(design, interaction.participants[i].segment);

          if (interaction.participants[i].segment.role === "reactantProduct") {
            segment.dx(110);
          }

          if (interaction.participants[i].segment.role === "reactant2") {
            segment.dx(220);
          }

        segments.push(segment);
      }
    }
  
     else if (interaction.type === "degradation") {
      
      for (let i in interaction.participants) {
        
          if (interaction.participants[i].role === "reactant") {
             interaction.participants[i].segment.role = "degradationReactant";
          }
          
          interaction.participants[i].segment.isParticipant = true;
          var segment = Segment.render(design, interaction.participants[i].segment);
          segments.push(segment);
      }
    }

    else {
      console.log("Unknown interaction type")
      return;
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
    box.attr('stroke-width', segment.thickness || '2px');
    box.attr('stroke-linejoin', 'round');
    box.attr('fill', 'none');

    group.add(box);
    design.geom.interactionPosition = design.geom.interactionPosition + group.bbox().height + design.geom.interactionPadding;
     
    
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
        labelText.dy(-box.bbox().height)
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
