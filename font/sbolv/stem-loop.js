
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {


    return {
	topLeft: Vec2(0, boxSize.y * 0.75),
	topRight: Vec2(boxSize.x * 0.625, boxSize.y * 0.75),
	loopApex: Vec2(boxSize.x * 0.8125, 0),
	bottomRight: Vec2(boxSize.x, boxSize.y),
	bottomLeft: Vec2(0, boxSize.y),
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

	'M' + Vec2.toPathString(geom.topLeft),
	'L' + Vec2.toPathString(geom.topRight),
	'C' + Vec2.toPathString(geom.topRight) + ' '
	    + Vec2.toPathString(geom.loopApex) + ' '
	    + Vec2.toPathString(geom.bottomRight),
	'L' + Vec2.toPathString(geom.bottomLeft),
	
        'Z'

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', 'black');
    glyph.attr('fill', '#ffc39b');

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri)

    return {
        glyph: glyph,
        backboneOffset: boxSize.y 
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.4
    }

};
