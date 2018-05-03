
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {
    
    //size of the box surronding crossed lines, which is a square 
    var cBox = Vec2(boxSize.x * 0.25);

    //offset of horizontal line proportional to coordinate of bottom left corner of cBox
    var hOffset = Vec2(boxSize.x * 0.05, boxSize.y * 0.01);

    return {
        //coordinates of the surrounding square 
        topLeft: Vec2(0, boxSize.y * 0.15),
        bottomLeft: Vec2(0, boxSize.y),
        bottomRight: Vec2(boxSize.x, boxSize.y),
        topRight: Vec2(boxSize.x, boxSize.y * 0.15),
        
        //coordinates of the inside crossed lines
        cTopLeft: Vec2(boxSize.x * 0.15, boxSize.y * 0.4),
        cBottomRight: Vec2(boxSize.x * 0.15 + cBox.x, boxSize.y * 0.4 + cBox.y),
        cTopRight: Vec2(boxSize.x * 0.15 + cBox.x, boxSize.y * 0.4),
        cBottomLeft: Vec2(boxSize.x * 0.15, boxSize.y * 0.4 + cBox.y),

        //coordinates of the horizontal line
        hLeft: Vec2(hOffset.x + boxSize.x * 0.2 + cBox.x, boxSize.y * 0.5+ cBox.y + hOffset.y),
        hRight: Vec2(hOffset.x * 0.08 + boxSize.x * 0.2 + cBox.x + boxSize.x * 0.42, boxSize.y * 0.5 + cBox.y + hOffset.y)            
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.bottomLeft),
        'L' + Vec2.toPathString(geom.bottomRight),
        'L' + Vec2.toPathString(geom.topRight),
        'L' + Vec2.toPathString(geom.topLeft),

        'M' + Vec2.toPathString(geom.cTopLeft),
        'L' + Vec2.toPathString(geom.cBottomRight),
  
        'M' + Vec2.toPathString(geom.cTopRight),
        'L' + Vec2.toPathString(geom.cBottomLeft),

        'M' + Vec2.toPathString(geom.hLeft),
        'L' + Vec2.toPathString(geom.hRight)

    ].join('');

    var glyph = design.surface.path(path);
    var group = design.surface.group()

    glyph.attr('stroke', glyphObject.color || '#000000');
    glyph.attr('stroke-width', glyphObject.thickness || '4px');
    glyph.attr('stroke-linecap', 'round');
    glyph.attr('stroke-linejoin', 'round');
    glyph.attr('fill', glyphObject.color || '#A9A9A9');

    group.add(glyph);

    boundingBox = design.surface.rect(boxSize.x, boxSize.y);
    boundingBox.attr('fill-opacity', 0);

    if(glyphObject.uri)
        boundingBox.attr('data-uri', glyphObject.uri);

    group.add(boundingBox);

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.2
    }

};



