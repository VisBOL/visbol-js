/**
 * This function extracts relevant information for
 * the preparation of the display 
 * (builds a glyphList, hookList, and rootGlyphs list)
 * 
 * @param {Object} displayInfo - the displayList used to prepare
 * relevant info
 */
function prepareInfo(displayInfo) {

    //printDisplayList(displayInfo);

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

function extractComponents(displayInfo, extractedInfo) {
    displayInfo.components.forEach(component => {
        component.segments.forEach(segment => {
            priorGlyph = null;
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

function extractInteractions(displayInfo, extractedInfo) {
    displayInfo.interactions.forEach(interaction => {
        priorGlyph = null;
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

function printDisplayList(displayInfo) {
    console.log('COMPONENTS: ');
    displayInfo.components.forEach(component => {
        component.segments.forEach(segment => {
            console.log(segment);
        });
    });
    console.log('\n\n');
    console.log('INTERACTIONS: ');
    console.log(displayInfo.interactions);
}

module.exports = prepareInfo;