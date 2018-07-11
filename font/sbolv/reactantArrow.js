
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {
    
    return {
         
        top: Vec2(boxSize.x/2,0),
        bottomLeft: Vec2(-boxSize.x,boxSize.y),
       bottomRight: Vec2(2 * boxSize.x, boxSize.y)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.top),
        'L' + Vec2.toPathString(geom.bottomLeft),

        'M' + Vec2.toPathString(geom.top),
        'L' + Vec2.toPathString(geom.bottomRight)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', 'red');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('fill', 'none');
    
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



