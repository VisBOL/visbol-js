var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function createGeometry(boxSize){
//Coordinates for rectangle
return{
    topLeft: Vec2(boxSize.x/2,0),
    bottomLeft: Vec2(boxSize.x/2,boxSize.y),              //Larger outer box
    bottomRight: Vec2(boxSize.x * 2,boxSize.y),
    topRight: Vec2(boxSize.x * 2,0),
  };
}
function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);
    var path1 = [
      'M' + Vec2.toPathString(geom.topLeft),
      'L' + Vec2.toPathString(geom.bottomLeft),
      'L' + Vec2.toPathString(geom.bottomRight),
      'L' + Vec2.toPathString(geom.topRight),
      'L' + Vec2.toPathString(geom.topLeft)
    ].join('');

    var path2 = [
      'M' + Vec2.toPathString(geom.topLeft),
      'L' + Vec2.toPathString(geom.topRight),
      'M' + Vec2.toPathString(geom.bottomLeft),
      'L' + Vec2.toPathString(geom.bottomRight),

    ].join('');

  var glyph1 = design.surface.path(path1);
  var glyph2 = design.surface.path(path2);

  var glyph3 = design.surface.circle(boxSize.x);
  var glyph4 = design.surface.circle(boxSize.x);
  var group = design.surface.group();

  glyph1.attr('stroke','dark gray');
  glyph1.attr('fill', glyphObject.color || '#85C1E9');
  glyph1.attr('stroke-width', glyphObject.thickness ||'2px');
  glyph1.attr('stroke-linejoin', 'square');

  glyph2.attr('stroke','black');
  glyph2.attr('fill', glyphObject.color || '#85C1E9');
  glyph2.attr('stroke-width', glyphObject.thickness ||'2px');
  glyph2.attr('stroke-linejoin', 'square');

  glyph3.attr('stroke','black');
  glyph3.attr('fill', glyphObject.color || '#85C1E9');
  glyph3.attr('stroke-width', glyphObject.thickness ||'2px');
  glyph3.attr('stroke-linejoin', 'round');
  glyph3.attr({ cx: boxSize.x*2, cy: boxSize.y/2 })

  glyph4.attr('stroke','black');
  glyph4.attr('fill', glyphObject.color || '#85C1E9');
  glyph4.attr('stroke-width', glyphObject.thickness ||'2px');
  glyph4.attr('stroke-linejoin', 'round');

  group.add(glyph3);
  group.add(glyph4);
  group.add(glyph1);
  group.add(glyph2);

  if(glyphObject.uri){
      group.attr('data-uri', glyphObject.uri)
    }

  return {
      glyph: group,
      backboneOffset: boxSize.y
  };
  }

  module.exports = {

  render: renderGlyph

  };
