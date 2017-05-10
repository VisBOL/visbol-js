module.exports = soToTopology;

function soToTopology(so) {

    return ({
      "SO:0000984": "single-stranded",
      "SO:0000985": "double-stranded",
      "SO:0000987": "linear",
      "SO:0000988": "circular",
    })[so];

}