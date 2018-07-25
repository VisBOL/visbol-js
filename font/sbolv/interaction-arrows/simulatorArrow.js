
var Vec2 = require('../../../lib/geom/vec2')
var Rect = require('../../../lib/geom/rect')

function createGeometry(boxSize) {
   
    return {
         
        top: Vec2(boxSize.x/2, boxSize.y * 0.1),
        bottom: Vec2(boxSize.x/2, boxSize.y * 0.8),

        left: Vec2(boxSize.x/3,boxSize.y * 0.8),
        right: Vec2((boxSize.x * 2 )/3, boxSize.y * 0.8),
        arrowBottom:Vec2(boxSize.x/2, boxSize.y) 

    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.top),
        'L' + Vec2.toPathString(geom.bottom),

        'M' + Vec2.toPathString(geom.left),
        'L' + Vec2.toPathString(geom.right),
        'L' + Vec2.toPathString(geom.arrowBottom),
        'Z'

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', 'red');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    
    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri);

    group.add(boundingBox);

    return {
        glyph: group
    };
}

module.exports = {

    render: renderGlyph,
};



