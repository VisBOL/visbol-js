
var Segment = require('../segment'),
    Helper = require('./helper')

function render(design, interaction, segments) {

      //make sure right type of interaction is passed to the function
      if (interaction.SBO !== "SBO:0000589") {
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
            
       for (let i in interaction.participants) {
        
           //clear all the previous rolles attached to participant segment
           interaction.participants[i].segment.role = null;

           //need to set it to true since we don't want to show the label for the segments
           interaction.participants[i].segment.isParticipant = true;

          //if participant is a Dna part or circuit
          if (interaction.participants[i].SO) {

             //update participant offset       
             design.geom.participantOffset = Helper.find_participant_offset(interaction.participants[i], interaction.displayId, "production");
             var segment = Segment.render(design, interaction.participants[i].segment);   
          }
          
          if (!interaction.participants[i].SO) {
             
            interaction.participants[i].segment.role = "production_nonDNA";
            interaction.participants[i].segment.participantRole = interaction.participants[i].role;
            var segment = Segment.render(design, interaction.participants[i].segment);
           
            //move the nonDNA part vertically
            segment.dy(-90);
            if (design.geom.participantOffset !== 0 ) {
              segment.dx( (design.geom.participantOffset -1) * (design.geom.defaultGlyphSize.x + design.geom.glyphPadding)
                                                         + design.geom.glyphPadding + design.geom.defaultGlyphSize.x/2)
            }
            else if (design.geom.participantOffset === 0) {
              segment.dx(0)
            }
          }
         segments.push(segment);
      }
}

module.exports = {

    render: render
};



