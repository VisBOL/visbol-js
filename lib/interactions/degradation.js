
var Segment = require('../segment')
        
function render(design, interaction, segments) {

      //make sure right type of interaction is passed to the function
      if (interaction.SBO !== "SBO:0000179") {
         return;
      }

      //make sure it always has 1 participants
      if (interaction.participants.length !== 1) {
        return;
      }

      for (let i in interaction.participants) {
        
        if (interaction.participants[i].role === "reactant") {
          interaction.participants[i].segment.role = "degradationReactant";
        }
          
        interaction.participants[i].segment.isParticipant = true;
        var segment = Segment.render(design, interaction.participants[i].segment);
        segments.push(segment);
    }
}

module.exports = {

    render: render
};



