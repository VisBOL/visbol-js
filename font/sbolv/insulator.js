
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {


    return {
        outerBoxBottomLeft: Vec2(0, 0),
        outerBoxBottomRight: Vec2(boxSize.x, 0),
        outerBoxTopLeft: Vec2(0, boxSize.y),
        outerBoxTopRight: Vec2(boxSize.x, boxSize.y),

        innerBoxBottomLeft: Vec2(boxSize.x/4, boxSize.y/4),
        innerBoxBottomRight: Vec2((3 * boxSize.x)/4, boxSize.y/4),
        innerBoxTopLeft: Vec2(boxSize.x/4, (3 * boxSize.y)/4),
        innerBoxTopRight: Vec2((3 * boxSize.x)/4, (3 * boxSize.y)/4)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.outerBoxBottomLeft),
        'L' + Vec2.toPathString(geom.outerBoxBottomRight),
        'L' + Vec2.toPathString(geom.outerBoxTopRight),
        'L' + Vec2.toPathString(geom.outerBoxTopLeft),
        'L' + Vec2.toPathString(geom.outerBoxBottomLeft),
        'L' + Vec2.toPathString(geom.outerBoxBottomRight),

        'M' + Vec2.toPathString(geom.innerBoxBottomLeft),
        'L' + Vec2.toPathString(geom.innerBoxBottomRight),
        'L' + Vec2.toPathString(geom.innerBoxTopRight),
        'L' + Vec2.toPathString(geom.innerBoxTopLeft),
        'L' + Vec2.toPathString(geom.innerBoxBottomLeft),
        'L' + Vec2.toPathString(geom.innerBoxBottomRight),

        'Z'

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', glyphObject.color || '#ff7f00');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    return {
        glyph: glyph,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.4
    }

};