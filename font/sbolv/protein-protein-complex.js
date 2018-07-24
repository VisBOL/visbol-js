var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function renderGlyph(design, glyphObject, boxSize) {

var largeCircle = design.surface.circle(boxSize.x/2);
var largeCircle2 = design.surface.circle(boxSize.x/2);
var smallCircle = design.surface.circle(boxSize.x/4);
var smallCircle2 = design.surface.circle(boxSize.x/4);
var smallBox = design.surface.rect(boxSize.x/6,boxSize.y/9);
var smallBox2 = design.surface.rect(boxSize.x/3,boxSize.y/7);
var group = design.surface.group();

largeCircle.attr('stroke','black');
largeCircle.attr('fill', glyphObject.color || '#F1948A');
largeCircle.attr('stroke-width', glyphObject.thickness ||'2px');
largeCircle.attr('stroke-linejoin', 'round');
largeCircle.attr({ cx: boxSize.x/2, cy: boxSize.y/2})
largeCircle.radius(20)

largeCircle2.attr('stroke','black');
largeCircle2.attr('fill', glyphObject.color || '#F1948A');
largeCircle2.attr('stroke-width', glyphObject.thickness ||'2px');
largeCircle2.attr('stroke-linejoin', 'round');
largeCircle2.attr({ cx: 0, cy: boxSize.y/2})
largeCircle2.radius(20)

smallCircle.attr('stroke','black');
smallCircle.attr('fill', glyphObject.color || '#F1948A');
smallCircle.attr('stroke-width', glyphObject.thickness ||'2px');
smallCircle.attr('stroke-linejoin', 'round');
smallCircle.attr({ cx: boxSize.x/5, cy: boxSize.y/1.1 })

smallCircle2.attr('stroke','black');
smallCircle2.attr('fill', glyphObject.color || '#F1948A');
smallCircle2.attr('stroke-width', glyphObject.thickness ||'2px');
smallCircle2.attr('stroke-linejoin', 'round');
smallCircle2.attr({ cx: -boxSize.x/4, cy: boxSize.y/1.1 })

smallBox.attr('stroke','dark gray');
smallBox.attr('fill', glyphObject.color || '#F1948A');
smallBox.attr('stroke-width', glyphObject.thickness ||'2px');
smallBox.attr('stroke-linejoin', 'round');
smallBox.attr({ x: boxSize.x/4.8, y: boxSize.y/1.32 })

smallBox2.attr('stroke','dark gray');
smallBox2.attr('fill', glyphObject.color || '#F1948A');
smallBox2.attr('stroke-width', glyphObject.thickness ||'2px');
smallBox2.attr('stroke-linejoin', 'round');
smallBox2.attr({ x: -boxSize.x/3.5, y: boxSize.y/1.35 })

group.add(largeCircle);
group.add(smallCircle);
group.add(smallBox);
group.add(largeCircle2);
group.add(smallCircle2);
group.add(smallBox2);


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
