
var Segment = require('../segment'),
    Helper = require('./helper')

function render(design, interaction, segments, interactions) {

      //make sure right type of interaction is passed to the function
      if (interaction.SBO !== "SBO:0000177") {
         return;
      }

      //make sure it always has 3 participants
      if (interaction.participants.length !== 3) {
        return;
        console.warn("wrong number of participants")
      }
      
      Helper.sortParticipants(interaction.participants, "non-covelant-binding");  
      
      let reactantNumber = 0;
      let productOffset = 0;
      let width = 0;
      for (let i in interaction.participants) {
              
          //clear all the previous rolles attached to participant segment
          interaction.participants[i].segment.role = null;

          if (interaction.participants[i].role === "reactant") {
              reactantNumber++;
              interaction.participants[i].segment.role = "reactant" + reactantNumber;
          }
          
          interaction.participants[i].segment.isParticipant = true;

         
          var segment = Segment.render(design, interaction.participants[i].segment, interactions);
         
           if (i == 0) {
            productOffset = interaction.segmentWidth;
            
           }
          
         if (interaction.participants[i].role === "product") {

             //segment.dx(110);
             segment.dx(productOffset);
             
         }

          else if (interaction.participants[i].segment.role === "reactant2") {
            segment.dx(220);
            
          }

        segments.push(segment);
      }
}

module.exports = {

    render: render
};



