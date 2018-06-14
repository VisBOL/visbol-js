
var Vec2 = require('../../lib/geom/vec2')

function createGeometry(boxSize) {

	var sizeScale = 0.4;
	var offsetX = (boxSize.x / 2.0) - ((boxSize.x / 2.0) * sizeScale);
    return {
        stemBottom: Vec2(boxSize.x / 2.0, boxSize.y),
        stemTop: Vec2(boxSize.x / 2.0, boxSize.y * -0.4),

		circleSizeX: boxSize.x * sizeScale,
		circleSizeY: boxSize.y * sizeScale,
		circleOffsetX: (boxSize.x / 2.0) - ((boxSize.x / 2.0) * sizeScale),
		circleOffsetY: (-boxSize.y * sizeScale) * 1.5
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.stemBottom),
        'L' + Vec2.toPathString(geom.stemTop),

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
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.4
    }

};
