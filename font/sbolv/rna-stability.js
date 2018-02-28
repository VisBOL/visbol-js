
var Vec2 = require('../../lib/geom/vec2')

function createGeometry(boxSize) {

	var waveScale = .875;
	var stemBottom = boxSize.y * 1.5;
	var stemTop = boxSize.y * 0.4;
	var stemStep = (stemBottom - stemTop) / 6;

	var polygonScaleX = 0.225;
	var polygonScaleLeft = 1.0 - polygonScaleX;
	var polygonScaleRight = 1.0 + polygonScaleX;
	var polygonTop = 0.0;
	var polygonMid = stemTop * 0.65;
		
    return {
		stemTop: Vec2(boxSize.x / 2.0, stemTop),
		stemControl: Vec2((boxSize.x / 2.0) * waveScale, stemTop + (stemStep / 2.0)),
		stemFirst: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 1)),
		stemSecond: Vec2(boxSize.x  / 2.0, stemTop + (stemStep * 2)),
		stemThird: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 3)),
		stemFourth: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 4)),
		stemFifth: Vec2(boxSize.x / 2.0, stemTop + (stemStep * 5)),
		stemBottom: Vec2(boxSize.x / 2.0, stemBottom),
		
		polygonTopLeft: Vec2((boxSize.x / 2.0) * polygonScaleLeft, polygonTop),
		polygonTopRight: Vec2((boxSize.x / 2.0) * polygonScaleRight, polygonTop),
		polygonBottomLeft: Vec2((boxSize.x / 2.0) * polygonScaleLeft, polygonMid),
		polygonBottomRight: Vec2((boxSize.x / 2.0) * polygonScaleRight, polygonMid),
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

		'M' + Vec2.toPathString(geom.stemTop),
		'Q' + Vec2.toPathString(geom.stemControl) + ' ' + Vec2.toPathString(geom.stemFirst),
		'T' + Vec2.toPathString(geom.stemSecond),
		'T' + Vec2.toPathString(geom.stemThird),
		'T' + Vec2.toPathString(geom.stemFourth),
		'T' + Vec2.toPathString(geom.stemFifth),
		'T' + Vec2.toPathString(geom.stemBottom),

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', glyphObject.color || '#000');
    glyph.attr('stroke-width', glyphObject.thickness || '4px');
	glyph.attr('stroke-linecap', 'round');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', 'none');

	boundingBox = design.surface.rect(boxSize.x, boxSize.y * 1.5);
    boundingBox.attr('fill-opacity', 0);

	var polygonPath = [
		'M' + Vec2.toPathString(geom.stemTop),
		'L' + Vec2.toPathString(geom.polygonBottomLeft),
		'L' + Vec2.toPathString(geom.polygonTopLeft),
		'L' + Vec2.toPathString(geom.polygonTopRight),
		'L' + Vec2.toPathString(geom.polygonBottomRight),
		'Z'
	].join('');

	var polygon = design.surface.path(polygonPath)
	polygon.attr('fill', glyphObject.color || '#f00');
	polygon.attr('stroke', '#000');
	polygon.attr('stroke-width', glyphObject.thickness || '4px');

	var group = design.surface.group();
	group.add(glyph);
	group.add(boundingBox);
	group.add(polygon);

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


