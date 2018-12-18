
var Vec2 = require('../../../lib/geom/vec2')
var Rect = require('../../../lib/geom/rect')

function createGeometry(boxSize) {
   
    return {
         
        left: Vec2(0,boxSize.y * 0.5),
        right: Vec2(0.7*boxSize.x, boxSize.y * 0.5),
        arrowTop:Vec2(0.7 * boxSize.x, boxSize.y * 0.4), 
        arrowBottom:Vec2(0.7 * boxSize.x, boxSize.y * 0.6),
        arrowPick:Vec2(boxSize.x * 0.8, boxSize.y * 0.5),
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.left),
        'L' + Vec2.toPathString(geom.right),

        'M' + Vec2.toPathString(geom.arrowTop),
        'L' + Vec2.toPathString(geom.arrowBottom),
        'L' + Vec2.toPathString(geom.arrowPick),
        'Z'

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', '#2ECC71');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('fill', '#2ECC71');
    
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



