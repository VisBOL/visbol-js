var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {

    return {
         
          topLeft:Vec2(0, boxSize.y),  
          topRight: Vec2(boxSize.x , boxSize.y),  
          bottomLeft: Vec2(-(boxSize.x * 0.3), boxSize.y * 1.3),  
          bottomRight: Vec2(boxSize.x * 1.3, boxSize.y * 1.3)  
   };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);
    var path = [

        'M' + Vec2.toPathString(geom.topLeft),     
        'L' + Vec2.toPathString(geom.bottomLeft),

        'L' + Vec2.toPathString(geom.bottomRight),      
        'L' + Vec2.toPathString(geom.topRight),

    ].join('');
     

    var glyph = design.surface.path(path);
    var group = design.surface.group();
   
    glyph.attr('stroke', 'black');
    glyph.attr('fill','none');
    glyph.attr('stroke-width', glyphObject.thickness ||'2px');
    glyph.attr('stroke-linejoin', 'round');

    group.add(glyph);


    if(glyphObject.uri) {
        group.attr('data-uri', glyphObject.uri);
    }



    return {
        glyph: group
        
    };
}

module.exports = {

    render: renderGlyph

};
