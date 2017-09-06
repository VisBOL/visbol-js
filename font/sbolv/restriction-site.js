
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {

    return {
        stemBottom: Vec2(boxSize.x / 2.0, boxSize.y),
        stemTop: Vec2(boxSize.x / 2.0, 0)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.stemBottom),
        'L' + Vec2.toPathString(geom.stemTop)

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', glyphObject.color || 'black');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    return {
        glyph: glyph,
        backboneOffset: boxSize.y * 0.5
    };
}

module.exports = {

    render: renderGlyph

};


