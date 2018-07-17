
var Vec2 = require('../../../lib/geom/vec2')
var Rect = require('../../../lib/geom/rect')

function createGeometry(boxSize) {
   
    return {
         
        left: Vec2(boxSize.x,boxSize.y * 0.5),
        right: Vec2(1.5*boxSize.x, boxSize.y * 0.5),
        arrowTop:Vec2(1.5 * boxSize.x, boxSize.y * 0.4), 
        arrowBottom:Vec2(1.5 * boxSize.x, boxSize.y * 0.6),
        arrowPick:Vec2(boxSize.x * 1.6, boxSize.y * 0.5),
        lineTop:Vec2(boxSize.x * 2, boxSize.y/2 - boxSize.y/8),
        lineBottom:Vec2(boxSize.x * 1.7, boxSize.y/2 + boxSize.y/8)
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
        'Z',
        
        'M' + Vec2.toPathString(geom.lineTop),
        'L' + Vec2.toPathString(geom.lineBottom)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group();
    var circle = design.surface.circle(boxSize.x/3);

    glyph.attr('stroke', '#000080');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('fill', '#000080');

    circle.center(boxSize.x * 1.85, boxSize.y/2)
    circle.attr('stroke', '#000080');
    circle.attr('fill', 'none');
    circle.attr('stroke-width', glyphObject.thickness || '3px');

    
    group.add(glyph);
    group.add(circle);

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



