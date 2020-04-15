const SVG = require('../svg');
/**
 * Gets the appropriate hook svg based on the hook's info
 * @param {Object} hookType 
 */
function mapToSVG(hookType) {
    return new SVG('_');
}

module.exports = mapToSVG;