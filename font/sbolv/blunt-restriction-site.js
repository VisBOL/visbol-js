
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {
	var outsideOffset = 10;
	var insideOffset = outsideOffset / 2.0;
	var middle = boxSize.x / 2.0;
    return {
        leftStemBottomStart: Vec2(middle - outsideOffset, boxSize.y),
		leftStemBottom: Vec2(middle - insideOffset, boxSize.y),
        leftStemTop: Vec2(middle - insideOffset, 0),
		leftStemTopEnd: Vec2(middle - outsideOffset, 0),

		rightStemBottomStart: Vec2(middle + outsideOffset, boxSize.y),
		rightStemBottom: Vec2(middle + insideOffset, boxSize.y),
		rightStemTop: Vec2(middle + insideOffset, 0),
		rightStemTopEnd: Vec2(middle + outsideOffset, 0)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var leftPath = [
        'M', geom.leftStemBottomStart.x, geom.leftStemBottomStart.y,
		'L', geom.leftStemBottom.x, geom.leftStemBottom.y,
		'L', geom.leftStemTop.x, geom.leftStemTop.y,
		'L', geom.leftStemTopEnd.x, geom.leftStemTopEnd.y
    ].join(' ');
    var leftBracket = design.surface.path(leftPath);
    leftBracket.attr('stroke', glyphObject.color || 'black');
    leftBracket.attr('stroke-width', glyphObject.thickness || '5px');
    leftBracket.attr('stroke-linejoin', 'round');
	leftBracket.attr('stroke-linecap', 'round');
    leftBracket.attr('fill', 'none');

	var rightPath = [
		'M', geom.rightStemBottomStart.x, geom.rightStemBottomStart.y,
		'L', geom.rightStemBottom.x, geom.rightStemBottom.y,
		'L', geom.rightStemTop.x, geom.rightStemTop.y,
		'L', geom.rightStemTopEnd.x, geom.rightStemTopEnd.y
    ].join(' ');
	var rightBracket = design.surface.path(rightPath);
    rightBracket.attr('stroke', glyphObject.color || 'black');
    rightBracket.attr('stroke-width', glyphObject.thickness || '5px');
    rightBracket.attr('stroke-linejoin', 'round');
	rightBracket.attr('stroke-linecap', 'round');
    rightBracket.attr('fill', 'none');

	var group = design.surface.group();
	group.add(leftBracket);
	group.add(rightBracket);

    if(glyphObject.uri)
        group.attr('data-uri', glyphObject.uri)

	boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);
    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y * 0.5
    };
}

module.exports = {

    render: renderGlyph

};


