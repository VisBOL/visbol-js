var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {
	 
    var indentScale = 0.02 * boxSize.x;
	 
    return {
		leftTop: Vec2(0.0 + indentScale, boxSize.y * 0.1),
		leftMiddle: Vec2(0.0 + indentScale, boxSize.y * 0.5),
		rightMiddle: Vec2(boxSize.x - indentScale, boxSize.y * 0.5),
                rightBottom: Vec2(boxSize.x - indentScale, boxSize.y * 0.9),
   };
}


function renderGlyph(design, glyphObject, boxSize) {

	var geom = createGeometry(boxSize);

	var path = [
		'M' + Vec2.toPathString(geom.leftTop),
		'L' + Vec2.toPathString(geom.leftMiddle),
		'L' + Vec2.toPathString(geom.rightMiddle),
		'L' + Vec2.toPathString(geom.rightBottom),

		 
	].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', 'black');
    glyph.attr('stroke-width', glyphObject.thickness || '5px');
    glyph.attr('fill', 'none');
    glyph.attr('stroke-linecap', 'round');
    glyph.attr('stroke-linejoin', 'round');

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri)

    var group = design.surface.group();
    group.add(boundingBox);
    group.add(glyph);

    return {
        glyph: group,
        backboneOffset: boxSize.y * 0.5
    };
}

module.exports = {

    render: renderGlyph,

    /*insets: {
        top: 0.5
    }*/
 
};



