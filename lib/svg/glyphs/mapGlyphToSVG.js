const SVG = require('../svg');
/**
 * Gets the appropriate hook svg based on the hook's info
 * @param {Object} glyphType
 */
function mapToSVG(glyphName) {
    return new SVG(glyphName);
}

module.exports = mapToSVG;