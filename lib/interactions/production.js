
var Segment = require('../segment'),
    Helper = require('./helper')

function render(design, interaction, segments, interactions) {

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
       nonDNAsVerticalOffset = 0;
       nonDNAshorizontalOffset = 0;
       isCircuit = true;
       if (interaction.participants[0].type !== "engineered-region") {
           isCircuit = false;
       }       
       for (let i in interaction.participants) {
        
           //clear all the previous rolles attached to participant segment
           interaction.participants[i].segment.role = null;

           //need to set it to true since we don't want to show the label for the segments
           interaction.participants[i].segment.isParticipant = true;

          //if participant is a Dna part or circuit
          if (interaction.participants[i].SO) {
             if (isCircuit) {
                 interaction.participants[i].segment.isCircuit = true;
             }
             //update participant offset       
             design.geom.participantOffset = Helper.find_participant_offset(interaction.participants[i], interaction.displayId, "production");
             var segment = Segment.render(design, interaction.participants[i].segment, interactions);
             nonDNAVerticalOffset = segment.bbox().height + 30;
             console.log(segment.bbox().height)
             nonDNAshorizontalOffset = (segment.bbox().width)/2;     
          }
          
          if (!interaction.participants[i].SO) {
             
            interaction.participants[i].segment.role = "production_nonDNA";
            interaction.participants[i].segment.participantRole = interaction.participants[i].role;
            var segment = Segment.render(design, interaction.participants[i].segment, interactions);
           
            
            if (isCircuit) {
              //segment.dx( (design.geom.participantOffset -1) * (design.geom.defaultGlyphSize.x + design.geom.glyphPadding) + design.geom.glyphPadding + design.geom.defaultGlyphSize.x/2)
              segment.dx(nonDNAshorizontalOffset - segment.bbox().width)
              //move the nonDNA part vertically
              segment.dy(-nonDNAVerticalOffset);
            }
            else if (!isCircuit) {
              segment.dx(0)
              //move the nonDNA part vertically
              segment.dy(-90);
              //segment.dx(nonDNAshorizontalOffset - segment.bbox().width)
            }
          }
         segments.push(segment);
      }
}

module.exports = {

    render: render
};



