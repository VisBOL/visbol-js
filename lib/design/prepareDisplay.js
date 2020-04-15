const Display = require('./display');
const Glyph = require('./glyph');
const Hook = require('./hook');
const prepareInfo = require('../gatherInfo/prepareInfo');
const renderSettings = require('../config/renderSettings');

/**
 * This function creates a Display instance, which is used to edit/render all relevant glyphs
 * @param {Object} displayInfo 
 */
function prepareDisplay(displayInfo) {
    const extractedInfo = prepareInfo(displayInfo);
    const glyphDictionary = {};
    extractedInfo.glyphList.forEach(glyphInfo => {
        if (!(glyphInfo.id in glyphDictionary)) {
            glyphDictionary[glyphInfo.id] = new Glyph(glyphInfo);
        }
    });
    extractedInfo.hookList.forEach(hookInfo => {
        glyphDictionary[hookInfo.startGlyph].hookTo(glyphDictionary[hookInfo.destinationGlyph], hookInfo.direction, hookInfo.type);
    })
    return new Display(glyphDictionary, extractedInfo.rootGlyphs, renderSettings.defaultPadding);
}

module.exports = prepareDisplay;