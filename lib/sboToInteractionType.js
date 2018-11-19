
module.exports = sboToInteractionType;

function sboToInteractionType(sbo) {

    return ({
      "SBO:0000169": "inhibition",
      "SBO:0000170": "stimulation",
      "SBO:0000176": "biochemical-reaction",
      "SBO:0000177": "non-covelant-binding",
      "SBO:0000179": "degradation",
      "SBO:0000589": "genetic-production",
      "SBO:0000141": "terminator",
      "SBO:0000168": "control"
    })[sbo];
}
