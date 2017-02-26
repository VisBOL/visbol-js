
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {


    return {
	bottomLeft: Vec2(0, boxSize.y),
	bottomRight: Vec2(boxSize.x, boxSize.y),
	topRight: Vec2(boxSize.x, 0),
	topMiddle: Vec2(boxSize.x * 0.5, boxSize.y * 0.5),
	topLeft: Vec2(0, 0)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

	'M' + Vec2.toPathString(geom.bottomLeft),
	'L' + Vec2.toPathString(geom.bottomRight),
	'L' + Vec2.toPathString(geom.topRight),
	'L' + Vec2.toPathString(geom.topMiddle),
	'L' + Vec2.toPathString(geom.topLeft),
	'L' + Vec2.toPathString(geom.bottomLeft),
	
        'Z'

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', 'black');
    glyph.attr('fill', '#ffcffc');

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
