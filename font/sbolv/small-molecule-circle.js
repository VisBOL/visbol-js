var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function renderGlyph(design, glyphObject, boxSize) {

var circle = design.surface.circle(boxSize.x/2);
var group = design.surface.group();

circle.center(-boxSize.x/2, boxSize.y/2)
circle.attr('stroke', 'black');
circle.attr('fill','gray');
circle.attr('stroke-width', glyphObject.thickness || '3px');

var boundingBox = design.surface.rect(boxSize.x, boxSize.y);

boundingBox.attr('fill-opacity', 0);

group.add(circle);
group.add(boundingBox);

    if(glyphObject.uri){
        group.attr('data-uri', glyphObject.uri);
}
    return {
        glyph: group,
        backboneOffset: boxSize.y
};
}
module.exports = {

    render: renderGlyph

};
