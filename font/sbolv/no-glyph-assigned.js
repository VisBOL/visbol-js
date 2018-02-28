var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {
	var width = boxSize.x / 2.0;
	var height = boxSize.y;
	var indentScale = 0.25;
    return {
		leftBottomStart: Vec2(width * indentScale, height),
		leftBottom: Vec2(0.0, height),
		leftTop: Vec2(0.0, 0.0),
		leftTopEnd: Vec2(width * indentScale, 0.0),

		rightBottomStart: Vec2(width - (width * indentScale), height),
		rightBottom: Vec2(width, height),
		rightTop: Vec2(width, 0.0),
		rightTopEnd: Vec2(width - (width * indentScale), 0.0),
    };
}


function renderGlyph(design, glyphObject, boxSize) {

	var geom = createGeometry(boxSize);

	var path = [
		'M' + Vec2.toPathString(geom.leftBottomStart),
		'L' + Vec2.toPathString(geom.leftBottom),
		'L' + Vec2.toPathString(geom.leftTop),
		'L' + Vec2.toPathString(geom.leftTopEnd),

		'M' + Vec2.toPathString(geom.rightBottomStart),
		'L' + Vec2.toPathString(geom.rightBottom),
		'L' + Vec2.toPathString(geom.rightTop),
		'L' + Vec2.toPathString(geom.rightTopEnd),
	].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', 'black');
	glyph.attr('stroke-width', glyphObject.thickness || '5px');
	glyph.attr('fill', 'none');

	var boundingBox = design.surface.rect(boxSize.x / 2.0, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri)

    var group = design.surface.group();
    group.add(glyph);
	group.add(boundingBox);

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


