var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {

    var arrowForkSize = Vec2(boxSize.y / 4.0,
                             boxSize.y / 4.0);

    return {
        start: Vec2(boxSize.x * 0.5, boxSize.y * 0.5),
        end: Vec2(boxSize.x, 0),
        topArrowForkEnd: Vec2(boxSize.x - arrowForkSize.x, 0),
        bottomArrowForkEnd: Vec2(boxSize.x, arrowForkSize.y)
    };

}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var group = design.surface.group()


    var circle = design.surface.ellipse(
        boxSize.x, boxSize.y);

    circle.attr('stroke', 'black');
    circle.attr('fill', glyphObject.color || '#cee');

    group.add(circle)

    var path = [

        'M' + Vec2.toPathString(geom.start),
        'L' + Vec2.toPathString(geom.end),
        'L' + Vec2.toPathString(geom.topArrowForkEnd),
        'M' + Vec2.toPathString(geom.end),
        'L' + Vec2.toPathString(geom.bottomArrowForkEnd)

    ].join('');

    var arrow = design.surface.path(path)
    arrow.attr('stroke', 'black');
    arrow.attr('fill', 'none')

    group.add(arrow)


    if(glyphObject.uri)
        group.attr('data-uri', glyphObject.uri)

    return {
        glyph: group,
        backboneOffset: boxSize.y / 2
    };
}

module.exports = {

    render: renderGlyph

};


