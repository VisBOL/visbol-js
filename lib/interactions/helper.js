/*
* this function returns the offset of the DNA part participating in the interaction 
*/
function find_participant_offset(participant, interactionDisplayId, interactionType) {
  
  //if one of the parameters is null return 0
  if (!participant || !interactionDisplayId) { 
    return 0;
  }

  DNAPartName = find_DNAPartName(interactionType, interactionDisplayId);
  //make sure participant is DNA part
  if (!participant.SO) {
    return;
  }
  //find the part in the sequence which has the role of the template, and set a flag 
  for (var i in participant.segment.sequence) {
    if (participant.segment.sequence[i].name === DNAPartName) {
      return parseInt(i);
                                
    }
  }
  //if we can't find the participant we return 0
  return 0;
}


/*
*this function finds name of the paraticipant in the displayId of the circuit
*in which the DNA part participant is participating
*/
function find_DNAPartName(interactionType, interactionDisplayId){
 
  displayIdToArray = interactionDisplayId.split("_");

  if (interactionType === "inhibition") {
      return displayIdToArray[1];
  }

  else if (interactionType === "production") {
    return displayIdToArray[0];
  }

  else if (interactionType === "simulation") {
    return displayIdToArray[displayIdToArray.length - 2];
  }
}

/*
*here we sort participants, since position of nonDnA deponds 
*on position of DNA part for this type of interaction, 
*DNA part should always come first
*/
function sortParticipants(participants, interactionType) {

      if (!interactionType) {

        //make sure interaction has right number of participants
        if (participants.length !== 2) {
          console.warn("wrong interaction format");
          return
        }

        if (participants[1].SO) {
          let temp = null;
          temp = participants[0];
          participants[0] = participants[1];
          participants[1] = temp;
        }
      }
      else if (interactionType === "non-covelant-binding") {
         
        //make sure interaction has right number of participants
        if (participants.length !== 3) {
          console.warn("wrong interaction format");
          return;
        }
        
        for (let i in participants) {

          if (participants[i].role === "product" && i === 1) {
            break;
          }
          else if ([i].role === "product") {
            let temp = participants[1]
            participants[1] = participants[i];
            participants[1] = temp
          }  
        }
      }       
}

module.exports = {

    find_participant_offset: find_participant_offset,
    sortParticipants: sortParticipants
};

