
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    var arrowForkSize = Vec2(boxSize.y / 4.0,
                             boxSize.y / 4.0);

    return {
        start: Vec2(0, boxSize.y),
        turn: Vec2(0, arrowForkSize.y),
        end: Vec2(boxSize.x, arrowForkSize.y),
        topArrowForkEnd: Vec2(boxSize.x - arrowForkSize.x, 0),
        bottomArrowForkEnd: Vec2(boxSize.x - arrowForkSize.x, arrowForkSize.y * 2)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.start),
        'L' + Vec2.toPathString(geom.turn),
        'L' + Vec2.toPathString(geom.end),
        'L' + Vec2.toPathString(geom.topArrowForkEnd),
        'M' + Vec2.toPathString(geom.end),
        'L' + Vec2.toPathString(geom.bottomArrowForkEnd)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#03c03c');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri);

    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.2
    }

};


