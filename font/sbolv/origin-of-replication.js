
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {

}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var glyph = design.surface.ellipse(
        boxSize.x, boxSize.y);


    glyph.attr('stroke', 'black');
    glyph.attr('fill', glyphObject.color || '#cee');

    return {
        glyph: glyph,
        backboneOffset: boxSize.y / 2
    };
}

module.exports = {

    render: renderGlyph

};


