
var Vec2 = require('../../lib/geom/vec2')

function createGeometry(boxSize) {

	var leftScale = 0.3
	var rightScale = 1.0 - leftScale
    return {
        stemBottom: Vec2(boxSize.x / 2.0, boxSize.y * 1.5),
        stemTop: Vec2(boxSize.x / 2.0, boxSize.y * 0.4),
        topLeft: Vec2(boxSize.x * leftScale, 0),
        topRight: Vec2(boxSize.x * rightScale, 0),
		bottomLeft: Vec2(boxSize.x * leftScale, boxSize.y * 0.7),
		bottomRight: Vec2(boxSize.x * rightScale, boxSize.y * 0.7)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.stemBottom),
        'L' + Vec2.toPathString(geom.stemTop),
        'M' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.bottomRight),
		'M' + Vec2.toPathString(geom.topRight),
        'L' + Vec2.toPathString(geom.bottomLeft),

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', glyphObject.color || '#000');
    glyph.attr('stroke-width', glyphObject.thickness || '4px');
	glyph.attr('stroke-linecap', 'round');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

	boundingBox = design.surface.rect(boxSize.x, boxSize.y * 1.5);
    boundingBox.attr('fill-opacity', 0);

	var group = design.surface.group();
	group.add(glyph);
	group.add(boundingBox);

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



