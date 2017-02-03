
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')
var Matrix = require('../../lib/geom/matrix')

function createGeometry(boxSize) {

    var headWidth = boxSize.y / 2.0;

    return {
        boxStart: Vec2(0, 0),
        boxTopRight: Vec2(boxSize.x - headWidth, 0),
        headPoint: Vec2(boxSize.x, boxSize.y / 2.0),
        boxBottomRight: Vec2(boxSize.x - headWidth, boxSize.y),
        boxBottomLeft: Vec2(0, boxSize.y)
    };
}

function renderGlyph(design, glyphObject, boxSize) {

    var geom = createGeometry(boxSize);

    var path = [

        'M' + Vec2.toPathString(geom.boxStart),
        'L' + Vec2.toPathString(geom.boxTopRight),
        'L' + Vec2.toPathString(geom.headPoint),
        'L' + Vec2.toPathString(geom.boxBottomRight),
        'L' + Vec2.toPathString(geom.boxBottomLeft),
        'Z'

    ].join('');

    var glyph = design.surface.path(path);

    glyph.attr('stroke', 'black');
    glyph.attr('fill', 'pink')

    if(glyphObject.uri)
        glyph.attr('data-uri', glyphObject.uri);

    var glyphMatrix = Matrix();

    glyphMatrix = Matrix.translate(glyphMatrix, Vec2(boxSize.x, 0))
    glyphMatrix = Matrix.multiply(glyphMatrix, Matrix.rotation(-135))
    //glyphMatrix = Matrix.translate(glyphMatrix, Vec2.subtract(0, boxSize))


    glyph.transform({
        matrix: Matrix.toSVGString(glyphMatrix)
        //matrix: Matrix.toSVGString(Matrix())
    })

    var group = design.surface.group()
    group.add(glyph)

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.35,
        bottom: 0.35,
        left: 0.2,
        right: 0.2
    }

};


