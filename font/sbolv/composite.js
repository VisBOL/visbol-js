var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function createGeometry(boxSize) {

    return {


        // Slanted line on the left
            topLeft:Vec2(0, boxSize.y),
            topRight: Vec2(boxSize.x * -0.25 , boxSize.y * 1.25),
        // First Bottom line Solid
            Left:  Vec2(boxSize.x* -0.25,boxSize.y * 1.25),
            Right: Vec2(boxSize.x * 0.26, boxSize.y * 1.25),
        // Dashed Line in the Middle
            MiddleLeft:  Vec2(boxSize.x * 0.3, boxSize.y * 1.25),
            MiddleRight: Vec2(boxSize.x * 0.9, boxSize.y * 1.25),
        // Second Bottom Line (Solid)
            Left2:  Vec2(boxSize.x * 0.75, boxSize.y * 1.25),
            Right2: Vec2(boxSize.x * 1.25, boxSize.y * 1.25),
        // Slanted line on the right
            bottomLeft: Vec2(boxSize.x, boxSize.y),
            bottomRight: Vec2(boxSize.x * 1.25, boxSize.y * 1.25)

    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);
    var path1 = [

        'M' + Vec2.toPathString(geom.topLeft),    // Dashed Left Line
        'L' + Vec2.toPathString(geom.topRight),

        'M' + Vec2.toPathString(geom.bottomLeft),     // Dashed Right Line
        'L' + Vec2.toPathString(geom.bottomRight),

    ].join('');

    var path2 = [

        'M' + Vec2.toPathString(geom.Left),
        'L' + Vec2.toPathString(geom.Right),
                                                    // 2 Disjoined Solid Lines
        'M' + Vec2.toPathString(geom.Left2),
        'L' + Vec2.toPathString(geom.Right2),


    ].join('');

    var path3 = [

        'M' + Vec2.toPathString(geom.MiddleLeft),   // Dashed Line @ Bottom
        'L' + Vec2.toPathString(geom.MiddleRight),

    ].join('');


    var glyph1 = design.surface.path(path1);
    var glyph2 = design.surface.path(path2);
    var glyph3 = design.surface.path(path3);
    var group = design.surface.group();

    // Specs for First Glyph
    glyph1.attr('stroke', 'black');
    glyph1.attr('fill', glyphObject.color || '#000000');
    glyph1.attr('stroke-dasharray', "6,2")
    glyph1.attr('stroke-width', glyphObject.thickness ||'2px');
    glyph1.attr('stroke-linejoin', 'round');

    // Second Glyph (Solid Lines Only)
    glyph2.attr('stroke', 'black');
    glyph2.attr('fill', glyphObject.color || '#000000');
    glyph2.attr('stroke-width', glyphObject.thickness ||'2px');
    glyph2.attr('stroke-linejoin', 'round');

    //Third Glyph
    glyph3.attr('stroke', 'black');
    glyph3.attr('fill', glyphObject.color || '#000000');
    glyph3.attr('stroke-dasharray', "3,5");
    glyph3.attr('stroke-width', glyphObject.thickness ||'2px');
    glyph3.attr('stroke-linejoin', 'round');

    group.add(glyph1);
    group.add(glyph2);
    group.add(glyph3);

    if(glyphObject.uri) {
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
