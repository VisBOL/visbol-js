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
    const ids = [];
    displayInfo.components.forEach(component => {
        component.segments.forEach(segment => {
            if (!ids.includes(segment.segmentId)) {
                var priorGlyph = null;
                segment.sequence.forEach(glyph => {
                    glyph.id = glyph.uri; //for now
                    if (!(glyph.id === "" || glyph.id === undefined)) {
                        extractedInfo.glyphList.push(glyph);
                        ids.push(glyph.id);
                        if (priorGlyph) {
                            extractedInfo.hookList.push({
                                startGlyph: priorGlyph.id,
                                destinationGlyph: glyph.id,
                                direction: 'link',
                                type: 'link'
                            });
                        }
                        else {
                            if (segment.sequence.length > 1) {
                                extractedInfo.rootGlyphs.push(glyph.id);
                            }
                        }
                        priorGlyph = glyph;
                    }
                });
            }
        });
    });
}

const anchors = ['template', 'inhibited', 'stimulator', 'modifier', 'reactant'];
/**
 * Extracts interactions from displayInfo
 * @param {Object} displayInfo 
 * @param {Object} extractedInfo - Object containing glyphList, hookList, and rootGlyphs lists
 * that is returned at the end of prepareInfo
 */
function extractInteractions(displayInfo, extractedInfo) {
    displayInfo.interactions.forEach(interaction => {
        if (interaction.participants.length > 1) {
            var destGlyph = null;
            var startGlyph = null;
            interaction.participants.forEach(participant => {
                const glyph = participant.segment.sequence[0];
                glyph.id = glyph.uri; //for now
                extractedInfo.glyphList.push(glyph);
                if (anchors.includes(participant.role)) {
                    startGlyph = glyph;
                }
                else {
                    destGlyph = glyph;
                }
                if (startGlyph && destGlyph) {
                    extractedInfo.hookList.push({
                        startGlyph: startGlyph.id,
                        destinationGlyph: destGlyph.id,
                        direction: 'north',
                        type: interaction.type
                    });
                    startGlyph = null;
                    destGlyph = null;
                }
            })
        }
        else {
            const glyph = interaction.participants[0].segment.sequence[0];
            glyph.id = glyph.uri; //for now
            extractedInfo.glyphList.push(glyph);
            extractedInfo.hookList.push({
                startGlyph: glyph.id,
                destinationGlyph: undefined,
                direction: 'east',
                type: interaction.type
            });
        }
    })
}

module.exports = prepareInfo;