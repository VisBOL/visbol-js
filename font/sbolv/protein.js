
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {

    return {
      leftEyeLeft: Vec2(boxSize.x * 0.25, boxSize.x * 0.4),
      leftEyeRight: Vec2(boxSize.x * 0.3, boxSize.x * 0.4),
      rightEyeleft: Vec2(boxSize.x * 0.75, boxSize.x * 0.4),
      rightEyeright: Vec2(boxSize.x * 0.8, boxSize.x * 0.4),
      left: Vec2(boxSize.x * 0.3, boxSize.x * 0.8),
      right: Vec2(boxSize.x * 0.7, boxSize.x * 0.8),
      noseTop: Vec2(boxSize.x * 0.5, boxSize.x * 0.5),
      noseBottom: Vec2(boxSize.x * 0.5, boxSize.x * 0.7),    
   };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);
    

    var path = [

        'M' + Vec2.toPathString(geom.left),
        'L' + Vec2.toPathString(geom.right),
         
    ].join('');

    var path2 = [

        'M' + Vec2.toPathString(geom.leftEyeLeft),
        'L' + Vec2.toPathString(geom.leftEyeRight),
        'M' + Vec2.toPathString(geom.rightEyeleft),
        'L' + Vec2.toPathString(geom.rightEyeright),
         
    ].join('');

    var path3 = [

        'M' + Vec2.toPathString(geom.noseTop),
        'L' + Vec2.toPathString(geom.noseBottom)
        
    ].join('');


    var glyph1 = design.surface.circle(
        boxSize.x, boxSize.x);

    glyph1.attr('stroke', 'black');
    glyph1.attr('fill', glyphObject.color || '#cee');
    glyph1.attr('stroke-width', glyphObject.thickness || '5px');

    var glyph2 = design.surface.path(path);
   
    glyph2.attr('stroke', 'red');
    glyph2.attr('fill', 'none');
    glyph2.attr('stroke-width', glyphObject.thickness || '3px');
    glyph2.attr('stroke-linecap', 'round');

    var glyph3 = design.surface.path(path2);
   
    glyph3.attr('stroke', 'green');
    glyph3.attr('fill', 'none');
    glyph3.attr('stroke-width', glyphObject.thickness || '3px');
    glyph3.attr('stroke-linecap', 'round');

    var glyph4 = design.surface.path(path3);
   
    glyph4.attr('stroke', 'purple');
    glyph4.attr('fill', 'none');
    glyph4.attr('stroke-width', glyphObject.thickness || '3px');
    glyph4.attr('stroke-linecap', 'round');
  

    var group = design.surface.group();
    group.add(glyph1);
    group.add(glyph2);
    group.add(glyph3);
    group.add(glyph4);

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

    render: renderGlyph

};



