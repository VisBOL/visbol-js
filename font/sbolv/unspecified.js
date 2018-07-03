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

	var fillPoints = [
		geom.top.x + ',' + geom.top.y,
		geom.left.x + ',' + geom.left.y,
		geom.bottom.x + ',' + geom.bottom.y,
		geom.right.x + ',' + geom.right.y
	].join(' ');
	var fill = design.surface.polygon(fillPoints);
	fill.attr('fill', glyphObject.color || '#ffff00');
	group.add(fill);

    var path = [
        'M' + Vec2.toPathString(geom.top),
        'L' + Vec2.toPathString(geom.left),
        'L' + Vec2.toPathString(geom.bottom),
        'L' + Vec2.toPathString(geom.right),
        'Z'
    ].join("")

    let question = design.surface.text('?').move(boxSize.x / 2, geom.bottom.y / 7);
    let dot = design.surface.text('.').move(boxSize.x/2.14, geom.bottom.y / 3.5)

    question.attr('text-anchor', 'middle');

    group.add(question)
    group.add(dot)
    group.add(design.surface.path(path))

    var glyph = group;

    glyph.attr('stroke', 'black');
    glyph.attr('fill', 'none');

    if (glyphObject.uri) {
        glyph.attr('data-uri', glyphObject.uri)
      }
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
