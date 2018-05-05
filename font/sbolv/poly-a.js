var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function renderGlyph(design, glyphObject, boxSize) {

    var glyph = design.surface.text('AAA');

    glyph.attr('stroke', 'black');
    glyph.attr('stroke-width', glyphObject.thickness || '0.5px');
    glyph.attr('fill', 'black');
    glyph.attr('font-size', '22px');

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    var group = design.surface.group();

    group.add(glyph);

    return {
        glyph: group,
        backboneOffset:boxSize.y 
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.42
    }
};


