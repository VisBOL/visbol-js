
var Vec2 = require('../../lib/geom/vec2')

function createGeometry(boxSize) {

	var sizeScale = 0.4;
	var offsetX = (boxSize.x / 2.0) - ((boxSize.x / 2.0) * sizeScale);

	var leftScale = 0.3;
	var rightScale = 1.0 - leftScale;
	var stemBottom = boxSize.y * 1.5;
	var stemTop = boxSize.y * 0.40;
	var stemStep = (stemBottom - stemTop) / 4.0;
	var xScaleLeftControl = .4;
	var xScaleRightControl = 1.0 - xScaleLeftControl;
	var yScaleLeft = .8;
    return {
		stemTop: Vec2(boxSize.x / 2.0, stemTop),
		stemTopControl: Vec2(boxSize.x * xScaleRightControl, stemTop),
		stemFirstRight: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 1)),
		stemFirstRightControl: Vec2(boxSize.x * xScaleRightControl, stemTop + (stemStep * 1)),
		stemFirstLeft: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 0) + (stemStep * yScaleLeft)),
		stemFirstLeftControl: Vec2(boxSize.x * xScaleLeftControl, stemTop + (stemStep * 0) + (stemStep * yScaleLeft)),
		stemSecondRight: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 2)),
		stemSecondRightControl: Vec2(boxSize.x * xScaleRightControl, stemTop + (stemStep * 2)),
		stemSecondLeft: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 1) + (stemStep * yScaleLeft)),
		stemSecondLeftControl: Vec2(boxSize.x * xScaleLeftControl, stemTop + (stemStep * 1) + (stemStep * yScaleLeft)),
		stemThirdRight: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 3)),
		stemThirdRightControl: Vec2(boxSize.x * xScaleRightControl, stemTop + (stemStep * 3)),
		stemThirdLeft: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 2) + (stemStep * yScaleLeft)),
		stemThirdLeftControl: Vec2(boxSize.x * xScaleLeftControl, stemTop + (stemStep * 2) + (stemStep * yScaleLeft)),
		stemBottom: Vec2(boxSize.x / 2.0, stemBottom),
		stemBottomControl: Vec2(boxSize.x * xScaleRightControl, stemBottom),
		
		circleSizeX: boxSize.x * sizeScale,
		circleSizeY: boxSize.y * sizeScale,
		circleOffsetX: (boxSize.x / 2.0) - ((boxSize.x / 2.0) * sizeScale),
		circleOffsetY: (-boxSize.y * sizeScale) * 0.5
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [
		
		'M' + Vec2.toPathString(geom.stemTop),
		'C' + Vec2.toPathString(geom.stemTopControl) + ' ' + Vec2.toPathString(geom.stemFirstRightControl) + ' ' + Vec2.toPathString(geom.stemFirstRight),
		'S' + Vec2.toPathString(geom.stemFirstLeftControl) + ' ' + Vec2.toPathString(geom.stemFirstLeft),
		'S' + Vec2.toPathString(geom.stemSecondRightControl) + ' ' + Vec2.toPathString(geom.stemSecondRight),
		'S' + Vec2.toPathString(geom.stemSecondLeftControl) + ' ' + Vec2.toPathString(geom.stemSecondLeft),
		'S' + Vec2.toPathString(geom.stemThirdRightControl) + ' ' + Vec2.toPathString(geom.stemThirdRight),
		'S' + Vec2.toPathString(geom.stemThirdLeftControl) + ' ' + Vec2.toPathString(geom.stemThirdLeft),
		'S' + Vec2.toPathString(geom.stemBottomControl) + ' ' + Vec2.toPathString(geom.stemBottom),

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', glyphObject.color || '#000');
    glyph.attr('stroke-width', glyphObject.thickness || '4px');
	glyph.attr('stroke-linecap', 'round');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

	boundingBox = design.surface.rect(boxSize.x, boxSize.y * 1.5);
    boundingBox.attr('fill-opacity', 0);

	var circle = design.surface.circle(geom.circleSizeX, geom.circleSizeY);
	circle.move(geom.circleOffsetX, geom.circleOffsetY);
	circle.attr('fill', glyphObject.color || '#00f');
	circle.attr('stroke', '#000');
	circle.attr('stroke-width', glyphObject.thickness || '4px');

	var group = design.surface.group();
	group.add(glyph);
	group.add(boundingBox);
	group.add(circle);

    if(glyphObject.uri)
        group.attr('data-uri', glyphObject.uri)

    return {
        glyph: group,
        backboneOffset: boxSize.y * 1.5
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.4
    }

};


