
module.exports = sboToRole;

function sboToRole(sbo) {

    return ({
      "SBO:0000020": "inhibitor",
      "SBO:0000642": "inhibited",
      "SBO:0000459": "simulator",
      "SBO:0000643": "simulated",
      "SBO:0000010": "reactant",
      "SBO:0000011": "product",
      "SBO:0000598": "promoter",
      "SBO:0000019": "modifier",
      "SBO:0000644": "modified",
      "SBO:0000645": "template"
    })[sbo];
}
