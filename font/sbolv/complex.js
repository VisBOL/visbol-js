var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize) {
  var x = boxSize.x;
  var y = boxSize.y;
  
return {

  topLeft: Vec2(0.25*x,y*0.2),
    leftOne: Vec2(0,y*0.4),
    leftTwo: Vec2(0,y*0.8),
  bottomLeft: Vec2(0.25*x,y),
  bottomRight: Vec2(1.5 *x,y),
    rightOne: Vec2(1.75*x,y*0.4),
    rightTwo: Vec2(1.75*x,y*0.8),
  topRight: Vec2(1.5 * x,y*0.2),

};
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);
    var path1 = [
      'M' + Vec2.toPathString(geom.topLeft),
      'L' + Vec2.toPathString(geom.leftOne),
      'L' + Vec2.toPathString(geom.leftTwo),
      'L' + Vec2.toPathString(geom.bottomLeft),
      'L' + Vec2.toPathString(geom.bottomRight),
      'L' + Vec2.toPathString(geom.rightTwo),
      'L' + Vec2.toPathString(geom.rightOne),
      'L' + Vec2.toPathString(geom.topRight),
       'Z'

    ].join('');

    var glyph = design.surface.path(path1);
    var group = design.surface.group()

    glyph.attr('stroke', 'black');
    glyph.attr('stroke-width', glyphObject.thickness || '3px');
    glyph.attr('stroke-linecap', 'square');
    glyph.attr('stroke-linejoin', 'square');
    glyph.attr('fill', glyphObject.color || '#ABEBC6');

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
};
