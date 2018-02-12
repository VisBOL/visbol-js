
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')
var Matrix = require('../../lib/geom/matrix')




function renderGlyph(design, glyphObject, boxSize) {

    var path = createPaths(design, glyphObject, boxSize)

    if(glyphObject.uri)
        path.attr('data-uri', glyphObject.uri);

    return {
        glyph: path,
        backboneOffset: boxSize.y
    };
}


module.exports = {

    render: renderGlyph

}

function createPaths(design, glyphObject, reqSize) {

    //481.7 477.4 167 207.8


    const d = 'M615.4,479.4c-17.3,0-31.2,14-31.2,31.2c0,3.6,0.6,7.1,1.8,10.4l-22.3,22.3c-20.5-11.3-46.8-8.3-64.2,9.1' + 
	'c-21.1,21.1-21.1,55.2,0,76.3c8,8,18,13,28.4,14.9v39.6h19.9v-39.7c10.3-1.9,20.1-6.9,28.1-14.9c17.4-17.4,20.4-43.7,9.1-64.2' +
	'l23.5-23.5c2.3,0.5,4.6,0.8,7,0.8c17.3,0,31.2-14,31.2-31.2C646.7,493.4,632.7,479.4,615.4,479.4z'
    
    const path = design.surface.path(d)

    path.attr('fill', glyphObject.color);
    path.attr('stroke', 'black')
    path.attr('stroke-width', '3')
    path.attr('stroke-linecap', 'round');
    path.attr('stroke-miterlimit', 10)

    var transform = Matrix()
    
    transform = Matrix.scale(transform, Vec2.divide(reqSize, Vec2(167, 207.8)))
    transform = Matrix.translate(transform, Vec2(-481.7, -477.4))

    path.attr('transform', 'matrix(' + Matrix.toSVGString(transform) + ')')

    var g = design.surface.group()
    g.add(path)

    return g


    function sizeX(n) {

        n = n - 483.6

        return reqSize.x * 0.5 + ((n / origSizeX) * reqSize.x) + ''

    }

    function sizeX_rel(n) {

        return ((n / origSizeX) * reqSize.x) + ''

    }

    function sizeY(n) {

        n = n - 479.3

        return reqSize.y * 0.5 + ((n / origSizeY) * reqSize.y) + ''

    }

    function sizeY_rel(n) {

        return ((n / origSizeY) * reqSize.y) + ''

    }
}



