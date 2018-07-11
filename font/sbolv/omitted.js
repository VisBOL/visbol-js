var Vec2 = require('../../lib/geom/vec2');
var Rect = require('../../lib/geom/rect');


function createGeometry(boxSize) {



    return {
        topLeft: Vec2(boxSize.x*0.2, boxSize.y * 0.35),
        bottomLeft: Vec2(boxSize.x*0.2, boxSize.y * 0.6),        //Outline of the entire figure
        bottomRight: Vec2(boxSize.x* 1.55, boxSize.y *0.6),
        topRight: Vec2(boxSize.x * 1.55, boxSize.y * 0.35),

        topLefta: Vec2(boxSize.x*0.2, boxSize.y * 0.35),
        bottomLefta: Vec2(boxSize.x*0.2, boxSize.y * 0.6),        //indent on the left
        bottomRighta: Vec2(boxSize.x * 0.25, boxSize.y *0.6),
        topRighta: Vec2(boxSize.x * 0.25, boxSize.y * 0.35),

        topLeftb: Vec2(boxSize.x * 1.50, boxSize.y * 0.35),
        bottomLeftb: Vec2(boxSize.x * 1.50, boxSize.y * 0.6),        //indent on the right
        bottomRightb: Vec2(boxSize.x* 1.55, boxSize.y *0.6),
        topRightb: Vec2(boxSize.x * 1.55, boxSize.y * 0.35),


        box1topLeft: Vec2(boxSize.x * 0.25,  boxSize.y * 0.35),
        box1bottomLeft: Vec2(boxSize.x * 0.25, boxSize.y * 0.6),
        box1bottomRight: Vec2(boxSize.x * 0.5, boxSize.y * 0.6),  //First Square (Black)
        box1topRight: Vec2(boxSize.x * 0.5, boxSize.y * 0.35),

        box2topLeft: Vec2(boxSize.x * 0.5, boxSize.y * 0.35),
        box2bottomLeft: Vec2(boxSize.x * 0.5, boxSize.y * 0.6),
        box2bottomRight: Vec2(boxSize.x * 0.75, boxSize.y * 0.6),  // Second Square (White)
        box2topRight: Vec2(boxSize.x * 0.75, boxSize.y * 0.35),

        box3topLeft: Vec2(boxSize.x * 0.75 , boxSize.y * 0.35),
        box3bottomLeft: Vec2(boxSize.x * 0.75,  boxSize.y * 0.6),
        box3bottomRight: Vec2(boxSize.x * 1, boxSize.y * 0.6),  //Third Square (Black)
        box3topRight: Vec2(boxSize.x * 1, boxSize.y * 0.35),

        box4topLeft: Vec2(boxSize.x * 1, boxSize.y *0.35),
        box4bottomLeft: Vec2(boxSize.x * 1 , boxSize.y * 0.6),
        box4bottomRight: Vec2(boxSize.x * 1.25, boxSize.y * 0.6),  //Fourth Square (White)
        box4topRight: Vec2(boxSize.x * 1.25, 0.35),

        box5topLeft: Vec2(boxSize.x * 1.25,boxSize.y *0.35),
        box5bottomLeft: Vec2(boxSize.x * 1.25 ,boxSize.y * 0.6),
        box5bottomRight: Vec2(boxSize.x * 1.50,boxSize.y * 0.6),  //Fifth Square (Black)
        box5topRight: Vec2(boxSize.x * 1.50,boxSize.y *0.35)

    }
}
    function renderGlyph(design, glyphObject, boxSize) {

        var geom = createGeometry(boxSize);
        var path = [

            'M' + Vec2.toPathString(geom.topLeft),
            'L' + Vec2.toPathString(geom.bottomLeft),   // Outer Figure
            'L' + Vec2.toPathString(geom.bottomRight),
            'L' + Vec2.toPathString(geom.topRight),
            'L' + Vec2.toPathString(geom.topLeft)

        ].join('');

        var path2 = [

            'M' + Vec2.toPathString(geom.box1topLeft),
            'L' + Vec2.toPathString(geom.box1bottomLeft),    // First Square
            'L' + Vec2.toPathString(geom.box1bottomRight),
            'L' + Vec2.toPathString(geom.box1topRight),
            'L' + Vec2.toPathString(geom.box1topLeft)

        ].join('');

        var path3 = [

            'M' + Vec2.toPathString(geom.box2topLeft),
            'L' + Vec2.toPathString(geom.box2bottomLeft),    // Second Square
            'L' + Vec2.toPathString(geom.box2bottomRight),
            'L' + Vec2.toPathString(geom.box2topRight),
            'L' + Vec2.toPathString(geom.box2topLeft)

        ].join('');

        var path4 = [

            'M' + Vec2.toPathString(geom.box3topLeft),
            'L' + Vec2.toPathString(geom.box3bottomLeft),    // Third Square
            'L' + Vec2.toPathString(geom.box3bottomRight),
            'L' + Vec2.toPathString(geom.box3topRight),
            'L' + Vec2.toPathString(geom.box3topLeft)

        ].join('');

        var path5 = [

            'M' + Vec2.toPathString(geom.box4topLeft),
            'L' + Vec2.toPathString(geom.box4bottomLeft),    // Fourth Square
            'L' + Vec2.toPathString(geom.box4bottomRight),
            'L' + Vec2.toPathString(geom.box4topRight),
            'L' + Vec2.toPathString(geom.box4topLeft)

        ].join('');

        var path6 = [

            'M' + Vec2.toPathString(geom.box5topLeft),
            'L' + Vec2.toPathString(geom.box5bottomLeft),    // Fifth Square
            'L' + Vec2.toPathString(geom.box5bottomRight),
            'L' + Vec2.toPathString(geom.box5topRight),
            'L' + Vec2.toPathString(geom.box5topLeft)

        ].join('');

        var path7 = [

            'M' + Vec2.toPathString(geom.topLefta),
            'L' + Vec2.toPathString(geom.bottomLefta),   // Left Indent
            'L' + Vec2.toPathString(geom.bottomRighta),
            'L' + Vec2.toPathString(geom.topRighta),
            'L' + Vec2.toPathString(geom.topLefta)

        ].join('');
        var path8 = [

            'M' + Vec2.toPathString(geom.topLeftb),
            'L' + Vec2.toPathString(geom.bottomLeftb),   // Right Indent
            'L' + Vec2.toPathString(geom.bottomRightb),
            'L' + Vec2.toPathString(geom.topRightb),
            'L' + Vec2.toPathString(geom.topLeftb)

        ].join('');



        var glyph = design.surface.path(path);
        var glyph2 = design.surface.path(path2);
        var glyph3 = design.surface.path(path3);
        var glyph4 = design.surface.path(path4);
        var glyph5 = design.surface.path(path5);
        var glyph6 = design.surface.path(path6);
        var glyph7 = design.surface.path(path7);
        var glyph8 = design.surface.path(path8);
        var group = design.surface.group()

        glyph.attr('stroke', 'black');
        glyph.attr('fill', glyphObject.color || '#ffffff');

        glyph.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph.attr('stroke-linejoin', 'square');
        glyph.attr('stroke-opacity', '0');

        glyph2.attr('stroke', 'black');
        glyph2.attr('fill', glyphObject.color || '#000000');

        glyph2.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph2.attr('stroke-linejoin', 'square');

        glyph3.attr('stroke', 'black');
        glyph3.attr('fill', glyphObject.color || '#ffffff');

        glyph3.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph3.attr('stroke-linejoin', 'square');
        glyph3.attr('stroke-opacity', '0');

        glyph4.attr('stroke', 'black');
        glyph4.attr('fill', glyphObject.color || '#000000');

        glyph4.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph4.attr('stroke-linejoin', 'square');


        glyph5.attr('stroke', 'black');
        glyph5.attr('fill', glyphObject.color || '#ffffff');

        glyph5.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph5.attr('stroke-linejoin', 'square');
        glyph5.attr('stroke-opacity', '0');

        glyph6.attr('stroke', 'black');
        glyph6.attr('fill', glyphObject.color || '#000000');
        glyph6.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph6.attr('stroke-linejoin', 'square');

        glyph7.attr('stroke', 'white');
        glyph7.attr('fill', glyphObject.color || '#ffffff');
        glyph7.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph7.attr('stroke-linejoin', 'square');

        glyph8.attr('stroke', 'white');
        glyph8.attr('fill', glyphObject.color || '#ffffff');
        glyph8.attr('stroke-width', glyphObject.thickness || '0.5px');
        glyph8.attr('stroke-linejoin', 'square');

        group.add(glyph);
        group.add(glyph2);
        group.add(glyph3);
        group.add(glyph4);
        group.add(glyph5);
        group.add(glyph6);
        group.add(glyph7);
        group.add(glyph8);

        if (glyphObject.uri) {
            group.attr('data-uri', glyphObject.uri)
        }


        return {
            glyph: group,
            backboneOffset: boxSize.y * 0.5
        };

    }
        module.exports = {

            render: renderGlyph


    };
