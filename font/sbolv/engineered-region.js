var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function renderGlyph(design, glyphObject, boxSize) {

    var glyph = design.surface.rect(boxSize.x, boxSize.y);

    glyph.attr('stroke', 'black');
    glyph.attr('fill', glyphObject.color || '#eee');

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    var group = design.surface.group();

    group.add(glyph);

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.5
    }
 
};


