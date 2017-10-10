var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {
    let x = boxSize.x;
    let y = boxSize.y;

        return {
            top: Vec2(x / 2, 0),
            left: Vec2((x - y) / 2, y / 2),
            right: Vec2((x + y) / 2, y / 2),
            bottom: Vec2(x / 2, y),
        };
    }
    

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var group = design.surface.group();

    var path = [
        'M' + Vec2.toPathString(geom.top),  
        'L' + Vec2.toPathString(geom.left),
        'L' + Vec2.toPathString(geom.bottom),
        'L' + Vec2.toPathString(geom.right),
        'Z'
    ].join("")

    let question = design.surface.text('?').move(boxSize.x / 2, 0);
    
    question.attr('text-anchor', 'middle');

    group.add(question)
    group.add(design.surface.path(path))

    var glyph = group;

    glyph.attr('stroke', 'black');
    glyph.attr('fill', 'none');

    if (glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    var group = design.surface.group();

    group.add(glyph);

    return {
        glyph: group,
        backboneOffset: 5 * boxSize.y / 4
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.5
    }

};