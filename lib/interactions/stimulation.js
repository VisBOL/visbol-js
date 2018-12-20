
var Segment = require('../segment'),
    Helper = require('./helper')

function render(design, interaction, segments, interactions, nonDNAshorizontalOffset) {

      
      //make sure right type of interaction is passed to the function
      if (interaction.SBO !== "SBO:0000170") {
         return;
      }

      //make sure it always has 2 participants
      if (interaction.participants.length !== 2) {
        return;
      }

      /*
      *here we sort participants, since position of nonDnA deponds
      *on position of DNA part for this type of interaction, 
      *DNA part should always come first so when irterating through  
      *interactions.participants we always find DNA part first
      */
       Helper.sortParticipants(interaction.participants);       
       nonDNAsVerticalOffset = 0;
       //nonDNAshorizontalOffset = 0;
       isCircuit = true;
       if (interaction.participants[0].type !== "engineered-region") {
           isCircuit = false;
       }      
       for (let i in interaction.participants) {
        
          //clear all the previous rolles attached to participant segment
          interaction.participants[i].segment.role = null;
          
          //need to set it to true since we don't want to show the label for the segments
          interaction.participants[i].segment.isParticipant = true;

          nonDNAVerticalOffset = segments[0].bbox().height + 25
          if (!interaction.participants[i].SO) {
             
            //need to set the role for the segment to be able to add the rendering for inhibition arrow in reder segment
            interaction.participants[i].segment.role = "stimulation_nonDNA";
            if (interaction.participants[i].isDegraded) {
              interaction.participants[i].segment.isDegradated = true
            }
            interaction.participants[i].segment.participantRole = interaction.participants[i].role;
            var segment = Segment.render(design, interaction.participants[i].segment, interactions, interaction);
           
            
            if (isCircuit ) {
              segment.dx(nonDNAshorizontalOffset - segment.bbox().width);
              segment.dy(-nonDNAVerticalOffset);
            }
            else if (!isCircuit) {
              segment.dx(0)
              segment.dy(-90);
              //segment.dx(nonDNAshorizontalOffset - segment.bbox().width)
            }
            segments.push(segment);
          }         
      }
}

module.exports = {

    render: render
};



