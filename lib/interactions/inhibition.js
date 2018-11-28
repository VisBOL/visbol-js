
var Segment = require('../segment'),
    Helper = require('./helper')

function render(design, interaction, segments, interactions) {

      //make sure right type of interaction is passed to the function
      if (interaction.SBO !== "SBO:0000169") {
         return;
      }

      //make sure it always has 2 participants
      if (interaction.participants.length !== 2) {
        return;
      }

      /*
      *here we sort participants, since position of nonDnA deponds on 
      *position of DNA part for this type of interaction, 
      *DNA part should always come first
      */
      Helper.sortParticipants(interaction.participants);
     
      nonDNAsVerticalOffset = 0;
      nonDNAshorizontalOffset = 0;
      for (let i in interaction.participants) {

        //clear all the previous rolles attached to participant segment
        interaction.participants[i].segment.role = null;
        
        //need to set it to true since we don't want to show the label for the segments
        interaction.participants[i].segment.isParticipant = true;

         //if participant is a Dna part or circuit
        if (interaction.participants[i].SO) {

          interaction.participants[i].segment.isCircuit = true;
          //update participant offset       
          design.geom.participantOffset = Helper.find_participant_offset(interaction.participants[i], interaction.displayId, "inhibition"); 
          var segment = Segment.render(design, interaction.participants[i].segment, interactions);
          nonDNAVerticalOffset = segment.bbox().height + 8;
          nonDNAshorizontalOffset = (segment.bbox().width)/2;
        }
        
        if (!interaction.participants[i].SO) {

          //need to set the role for the segment to be able to add the rendering for inhibition arrow in reder segment
          interaction.participants[i].segment.role = "inhibition_nonDNA";
          interaction.participants[i].segment.participantRole = interaction.participants[i].role;
          var segment = Segment.render(design, interaction.participants[i].segment, interactions);
          //move the nonDNA part vertically
          segment.dy(-nonDNAVerticalOffset);

          //move the nonDna part horizontally to put it above the DNA part interacting with it  
          if (design.geom.participantOffset !== 0 ) {
            //segment.dx( (design.geom.participantOffset -1) * (design.geom.defaultGlyphSize.x + design.geom.glyphPadding) + design.geom.glyphPadding + design.geom.defaultGlyphSize.x/2 + 25)
            segment.dx(nonDNAshorizontalOffset - segment.bbox().width) 
          }
          //case when we don't need to move the non-DNA part horizontally
            else if (design.geom.participantOffset === 0) {
              segment.dx(nonDNAshorizontalOffset - segment.bbox().width) 
          }
        }
      
      segments.push(segment);
    }
}

module.exports = {

    render: render
};



