
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {

    var rightIndent = Vec2(boxSize.x * 0.25, boxSize.y * 0.3)

    return {
        topLeft: Vec2(0.0 + rightIndent.x , 0.0 + rightIndent.y),
        bottomLeft: Vec2(0.0 + rightIndent.x, boxSize.y),
        bottomRight: Vec2(boxSize.x - rightIndent.x, boxSize.y),
        topRight: Vec2(boxSize.x - rightIndent.x, 0.0 + rightIndent.y)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.bottomLeft),
        'L' + Vec2.toPathString(geom.bottomRight),
        'L' + Vec2.toPathString(geom.topRight)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '4px');
    glyph.attr('stroke-linecap', 'round');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

    var hideDNA = design.surface.rect(boxSize.x * 0.5, boxSize.y);
    hideDNA.attr('fill', '#ffffff');
    hideDNA.attr('x', boxSize.x * 0.25);

    group.add(hideDNA);
    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri);

    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y * 0.65
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.2,
        
    }

};



