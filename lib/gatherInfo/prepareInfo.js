/**
 * This function extracts relevant information for
 * the preparation of the display 
 * (builds a glyphList, hookList, and rootGlyphs list)
 * 
 * @param {Object} displayInfo - the displayList used to prepare
 * relevant info
 */
function prepareInfo(displayInfo) {

    const extractedInfo = {
        glyphList: [],
        hookList: [],
        rootGlyphs: []
    }
    // fill glyphList, hookList, and rootGlyphs
    extractComponents(displayInfo, extractedInfo);
    extractInteractions(displayInfo, extractedInfo)

    return extractedInfo;
}

/**
 * Extracts components from displayInfo
 * @param {Object} displayInfo 
 * @param {Object} extractedInfo - Object containing glyphList, hookList, and rootGlyphs lists
 * that is returned at the end of prepareInfo
 */
function extractComponents(displayInfo, extractedInfo) {
    displayInfo.components.forEach(component => {
        component.segments.forEach(segment => {
            var priorGlyph = null;
            segment.sequence.forEach(glyph => {
                glyph.id = glyph.uri; //for now
                extractedInfo.glyphList.push(glyph);
                if (priorGlyph) {
                    extractedInfo.hookList.push({
                        startGlyph: priorGlyph.id,
                        destinationGlyph: glyph.id,
                        direction: 'east',
                        type: 'link'
                    });
                }
                else {
                    if (segment.sequence.length > 1) {
                        extractedInfo.rootGlyphs.push(glyph.id);
                    }
                }
                priorGlyph = glyph;
            });
        });
    });
}

/**
 * Extracts interactions from displayInfo
 * @param {Object} displayInfo 
 * @param {Object} extractedInfo - Object containing glyphList, hookList, and rootGlyphs lists
 * that is returned at the end of prepareInfo
 */
function extractInteractions(displayInfo, extractedInfo) {
    displayInfo.interactions.forEach(interaction => {
        var priorGlyph = null;
        interaction.participants.forEach(participant => {
            const glyph = participant.segment.sequence[0];
            glyph.id = glyph.uri; //for now
            extractedInfo.glyphList.push(glyph);
            if (priorGlyph) {
                extractedInfo.hookList.push({
                    startGlyph: priorGlyph.id,
                    destinationGlyph: glyph.id,
                    direction: 'north',
                    type: interaction.type
                });
            }
            priorGlyph = glyph;
        })
    })
}

module.exports = prepareInfo;