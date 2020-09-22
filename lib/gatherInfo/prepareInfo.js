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
        rootGlyphs: [],
        topologies: []
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

 //grab component
 //iterate through segments, mapping segment ID to segment index
 //iterate through segment sequences. Build to ignore list which includes indexes of segments
 // that already are on another segment's sequence
 //build glyphs from segments that aren't in to ignore list
function extractComponents(displayInfo, extractedInfo) {
    displayInfo.components.forEach(component => {
        if (component.segments.length > 0) {
            const segmentIdToIndex = {};
            for (var i = 0; i < component.segments.length; i++) {
                segmentIdToIndex[component.segments[i].segmentId] = i;
            }
            console.log(segmentIdToIndex);
            const segmentsToIgnore = [];
            component.segments.forEach(segment => {
                segment.sequence.forEach(glyph => {
                    if(segmentIdToIndex.hasOwnProperty(glyph.uri)) {
                        segmentsToIgnore.push(segmentIdToIndex[glyph.uri]);
                    }
                });
            });
            console.log(segmentsToIgnore);
            for (var i = 0; i < component.segments.length; i++) {
                if (segmentsToIgnore.includes(i)) {
                    continue;
                }
                const segment = component.segments[i];
                if (segment.topologies.length > 0) {
                    extractedInfo.topologies = segment.topologies;
                }
                var priorGlyph = null;
                segment.sequence.forEach(glyph => {
                    if (!(glyph.uri === "" || glyph.uri === undefined)) {
                        extractedInfo.glyphList.push(glyph);
                        if (priorGlyph) {
                            extractedInfo.hookList.push({
                                startGlyph: priorGlyph.uri,
                                destinationGlyph: glyph.uri,
                                direction: 'link',
                                type: 'link'
                            });
                        }
                        else {
                            extractedInfo.rootGlyphs.push(glyph.uri);
                        }
                        priorGlyph = glyph;
                    }
                });
            }
        }
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
    if (!displayInfo.interactions) {
        return;
    }
    displayInfo.interactions.forEach(interaction => {
        if (interaction.participants.length > 1) {
            var destGlyph = null;
            var startGlyph = null;
            interaction.participants.forEach(participant => {
                const glyph = participant.segment.sequence[0];
                extractedInfo.glyphList.push(glyph);
                if (anchors.includes(participant.role)) {
                    startGlyph = glyph;
                }
                else {
                    destGlyph = glyph;
                }
                if (startGlyph && destGlyph) {
                    extractedInfo.hookList.push({
                        startGlyph: startGlyph.uri,
                        destinationGlyph: destGlyph.uri,
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
            extractedInfo.glyphList.push(glyph);
            extractedInfo.hookList.push({
                startGlyph: glyph.uri,
                destinationGlyph: undefined,
                direction: 'east',
                type: interaction.type
            });
        }
    })
}

module.exports = prepareInfo;