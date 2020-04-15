var soToGlyphType = require('./soToGlyphType')
var sboToInteractionType = require('./sboToInteractionType')
var sboToRole = require('./sboToRole')
var getDisplayListSegment = require('./getDisplayList').getDisplayListSegment
var URI = require('sboljs').URI

function getInteractionList(moduleDefinition, config, share) {
  
  let interactions = [];

  moduleDefinition.interactions.forEach(function(interaction){
               
          let interactionObj = {};
          interactionObj.displayId = interaction.displayId;

          //This is for when there are more than just one of this type of interaction 
           interactionObj.name = interaction.name;
           
           //Finding type of interaction
           if (interaction.types.length === 1) {
                    
              var SBOCode = interaction.types[0]._parts.path.split('/').pop();
              interactionObj.type = sboToInteractionType(SBOCode) ;
              interactionObj.SBO = SBOCode;
           }

           interactionObj.participants = [];

           //Making participation objects
           interaction.participations.forEach(function(participation) {

              
              let participantObj = {};
              if (participation.displayId !== undefined) {
                  participantObj.displayId = participation.displayId;
              }

               if (participation.participant.definition && !(participation.participant.definition instanceof URI) && participation.participant.definition.uri) {
                   participantObj.segment = getDisplayListSegment(participation.participant.definition,config,share)
                   participantObj.name = participation.participant.definition.displayId;

                  //Attaching type when participant is Non-DNA
                  if(participation.participant.definition.types[0]._parts.fragment != "DnaRegion") {
 
                    if (participation.participant.definition.types.length === 1) {
                      //Attaching type
                      participantObj.type = participation.participant.definition.types[0]._parts.fragment;
                    }
                  }
       
                 //Attaching type when participant is DNA 
                 else if( participation.participant.definition.roles.length === 1 ) {
                 
                
                    var SOCode = participation.participant.definition.roles[0]._parts.path.split('/').pop();
                    //var SOCode = participation._roles[0]._parts.path.split('/').pop();
                    // This property only exists for DNA parts 
                    participantObj.SO = SOCode ;
                    participantObj.type = soToGlyphType(SOCode);                  
                }
            }

              if (participation.roles.length === 1) {

                 var SBOCode = participation.roles[0]._parts.path.split('/').pop();

                 //This is the SBO term which determines role of the part in the interaction 
                 participantObj.role = sboToRole(SBOCode);
                 participantObj.SBO = SBOCode;
              }
              //Adding current participant object to current interaction participants list 
              interactionObj.participants.push(participantObj);
           })
           //Adding current interaction object to interactions list
           interactions.push(interactionObj);
    }) 

    return interactions;    
}
 
 
module.exports = getInteractionList

