
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    return {
        stemBottom: Vec2(boxSize.x / 3.0, boxSize.y),
        stemTop: Vec2(boxSize.x / 3.0, 0),
        topRight: Vec2(boxSize.x, 0),
        topLeft: Vec2(0, 0),
        tick: Vec2(0, boxSize.y / 4.0)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.stemBottom),
        'M' + Vec2.toPathString(geom.stemBottom),
        'L' + Vec2.toPathString(geom.stemTop),
        'M' + Vec2.toPathString(geom.topRight),
        'L' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.tick)

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', glyphObject.color || '#c23b22');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

    return {
        glyph: glyph,
        backboneOffset: boxSize.y
    };
}

module.exports = {
    render: renderGlyph
}


