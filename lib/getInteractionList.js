var soToGlyphType = require('./soToGlyphType')
//var sboToType = require('./sboToType')

function getInteractionList(moduleDefinition) {
  
  let interactions = [];

  moduleDefinition.interactions.forEach(function(interaction){
                                   
          let interactionObj = {};
          interactionObj.displayId = interaction.displayId;
          //this is for when there are more than just one of this type of interaction 
           interactionObj.name = interaction.name;
           interactionObj.participants = [];

           //finding type of interaction
           if (interaction.types.length === 1) {
                    
              var type = interaction.types[0]._parts.path.split('/').pop();
              interactionObj.type = type;
           }

           //making participation objects
           interaction.participations.forEach(function(participation) {

              let participantObj = {};
              participantObj.displayId = participation.displayId;
                     
              participantObj.name = participation.participant.displayId;

              //Attaching type when participant is Non-DNA
              if( participation.participant.definition.roles.length === 0 ) {
 
                if (participation.participant.definition.types.length === 1) {
                  //attaching type 
                  participantObj.type = participation.participant.definition.types[0]._parts.fragment
                 }
              }
       
             //Attaching type when participant is DNA 
              else if( participation.participant.definition.roles.length === 1 ) {
                 //attaching type 
                 participantObj.type = participation.participant.definition.roles[0]._parts.path.split('/').pop();
                         
              }

              if (participation.roles.length === 1) {

                 var role = participation.roles[0]._parts.path.split('/').pop();
                 //this is the SBO term
                 participantObj.role = role;
              }
              //Adding current participant object to current interaction participants list 
              interactionObj.participants.push(participantObj);
           })
           //Adding curent interaction object to interactions list
           interactions.push(interactionObj);
    }) 

    return interactions;    
}
 
 
module.exports = getInteractionList
