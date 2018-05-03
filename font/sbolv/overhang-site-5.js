
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    return {
        topLeft: Vec2(0, boxSize.y * 0.25),
        topRight: Vec2(boxSize.x, boxSize.y * 0.25),
        bottomLeft: Vec2(boxSize.x * 0.5, boxSize.y * 0.75),
        bottomRight: Vec2(boxSize.x, boxSize.y * 0.75)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.topRight),

        'M' + Vec2.toPathString(geom.bottomLeft),
        'L' + Vec2.toPathString(geom.bottomRight)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('stroke-linecap', 'round');
    glyph.attr('fill', 'none');

    var hideDNA = design.surface.rect(boxSize.x, boxSize.y);
    hideDNA.attr('fill', '#ffffff');
    group.add(hideDNA);

    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri);

    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y * 0.5
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.2
    }

};



