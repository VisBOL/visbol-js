
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    return {
        bottomLeft: Vec2(0.0, boxSize.y * 0.75),
        bottomRight: Vec2(boxSize.x, boxSize.y * 0.75),
        top: Vec2(boxSize.x * 0.6, boxSize.y * 0.4)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.bottomLeft),
        'L' + Vec2.toPathString(geom.bottomRight),
        'L' + Vec2.toPathString(geom.top)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('stroke-linecap', 'round');
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



