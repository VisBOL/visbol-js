
/*
* this object maps name of complex types to their corresponding 
* file names in main.js file, any change here, requires change
* in main.js  
*/
const complexType = {

  "protein-protein-complex": "protein-protein-complex",
  "molecule-protein-complex": "molecule-protein-complex",
  "rna-protein-complex": "rna-protein-complex",
  "SBGN": "complex"
};


/*
* this function returns one of the keys in complexType object above
*/
function getComplexType(interaction){

   

   //if interaction is null, there's no way to determine type of complex
   if (interaction === null || interaction === undefined) {
     return "SBGN";
   }

   const reactantTypes = ["SmallMolecule", "Rna"];
   let reactant = undefined;

    /*
     *  we know that one of the reactants is always protein we just need to find the other one
     *  as soon as we find Rna or SmallMolecule we exit the loop
    */ 
    for (let i in reactantTypes) {
              
      reactant = interaction.participants.find(function(participant) {
      
        return participant.type === reactantTypes[i];
      });
 
      
      // it means that one of rectants is of type either SmallMolecule or Rna so no need to continue
      if (reactant !== undefined) 
         break; 
    }
    
    

    if (reactant ==undefined)
       return "SBGN";
    /*
     *it mean that couldn't find any of "SmallMolecule", "Rna" 
     * which means both of reactants are of type protein
    */ 
    if (reactant.type === undefined) {

       return "protein-protein-complex";
    }
    else if (reactant.type === "SmallMolecule") {

       return "molecule-protein-complex";
    }
    else if (reactant.type === "Rna") {

       return "rna-protein-complex";
    }

};

/*
* this function finds and returns the interaction in which 
* the complexObject parameter has particpated in
*/
function findInteractionForComplex(interactions, complexObject) {
   
   if (interactions && complexObject) {
   
     for (interaction of interactions) {

       //this is the SBO for non-covelant-binding, the interaction from which we can extract type of participants 
       if (interaction.SBO === "SBO:0000177") {
        
         for (participant of interaction.participants) {
       
           if (participant.displayId === complexObject.name) {
             return interaction;
           }
         }
       }
    }
  }
}


module.exports = {

  complexType: complexType,
  getComplexType: getComplexType,
  findInteractionForComplex: findInteractionForComplex 

}


