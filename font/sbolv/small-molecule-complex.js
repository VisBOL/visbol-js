var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function renderGlyph(design, glyphObject, boxSize) {

var largeCircle = design.surface.circle(boxSize.x/2);
var smallCircle = design.surface.circle(boxSize.x/4);
var smallBox = design.surface.rect(boxSize.x/6,boxSize.y/9);
var group = design.surface.group();
var circle = design.surface.circle(boxSize.x/4);

largeCircle.attr('stroke','black');
largeCircle.attr('fill', glyphObject.color || '#F1948A');
largeCircle.attr('stroke-width', glyphObject.thickness ||'2px');
largeCircle.attr('stroke-linejoin', 'round');
largeCircle.attr({ cx: boxSize.x/2, cy: boxSize.y/2})
largeCircle.radius(20)

smallCircle.attr('stroke','black');
smallCircle.attr('fill', glyphObject.color || '#F1948A');
smallCircle.attr('stroke-width', glyphObject.thickness ||'2px');
smallCircle.attr('stroke-linejoin', 'round');
smallCircle.attr({ cx: boxSize.x/5, cy: boxSize.y/1.1 })

smallBox.attr('stroke','dark gray');
smallBox.attr('fill', glyphObject.color || '#F1948A');
smallBox.attr('stroke-width', glyphObject.thickness ||'2px');
smallBox.attr('stroke-linejoin', 'round');
smallBox.attr({ x: boxSize.x/4.8, y: boxSize.y/1.35 })

circle.center(boxSize.x/4, boxSize.y/6)
circle.attr('stroke', 'black');
circle.attr('fill', glyphObject.color ||'#85C1E9');
circle.attr('stroke-width', glyphObject.thickness || '3px');

group.add(largeCircle);
group.add(smallCircle);
group.add(smallBox);
group.add(circle);


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
