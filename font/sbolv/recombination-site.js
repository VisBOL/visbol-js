
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    if(boxSize.y > boxSize.x) {
        return {
            topBack: Vec2(0, (boxSize.y - boxSize.x) / 2),
            bottomBack: Vec2(0, boxSize.y - (boxSize.y - boxSize.x) / 2),
            point: Vec2(boxSize.x, boxSize.y / 2.0),
        };
    }

    return {
        topBack: Vec2((boxSize.x - boxSize.y) / 2, 0),
        bottomBack: Vec2((boxSize.x - boxSize.y) / 2, boxSize.y),
        point: Vec2(boxSize.x - (boxSize.x - boxSize.y) / 2, boxSize.y / 2.0),
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.topBack),
        'L' + Vec2.toPathString(geom.bottomBack),
        'L' + Vec2.toPathString(geom.point),
        'Z'

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', 'black');
    glyph.attr('fill', glyphObject.color || '#779ecb');

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    return {
        glyph: glyph,
        backboneOffset: boxSize.y / 2.0
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.2,
        bottom: 0.2
    }

}


