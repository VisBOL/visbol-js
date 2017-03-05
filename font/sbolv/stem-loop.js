
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')

function renderGlyph(design, glyphObject, boxSize) {


    var paths = createPaths(design, glyphObject, boxSize)

    var group = design.surface.group();

    paths.forEach((path) => group.add(path))

    if(glyphObject.uri)
        group.attr('data-uri', glyphObject.uri);

    return {
        glyph: group,
        backboneOffset: boxSize.y
    };
}

function createPaths(design, glyphObject, reqSize) {

    const origSizeX = 1000;
    const origSizeY = 400;

    const loopCoords = [
        { x1: 100, y1: 150, x2: 150, y2: -50, x3: 200,  y3: 150 },
        { x1: 300, y1: 150, x2: 350, y2: -50, x3: 400,  y3: 150 },
        { x1: 500, y1: 150, x2: 550, y2: -50, x3: 600,  y3: 150 },
        { x1: 700, y1: 150, x2: 750, y2: -50, x3: 800,  y3: 150 },
        { x1: 900, y1: 150, x2: 950, y2: -50, x3: 1000, y3: 150 },

        { x1: 100, y1: 250, x2: 150, y2: 450, x3: 200,  y3: 250 },
        { x1: 300, y1: 250, x2: 350, y2: 450, x3: 400,  y3: 250 },
        { x1: 500, y1: 250, x2: 550, y2: 450, x3: 600,  y3: 250 },
        { x1: 700, y1: 250, x2: 750, y2: 450, x3: 800,  y3: 250 },
        { x1: 900, y1: 250, x2: 950, y2: 450, x3: 1000, y3: 250 },
    ]

    const lineCoords = [
        { x1: 0,    y1: 150, x2: 100,  y2: 150 },
        { x1: 200,  y1: 150, x2: 300,  y2: 150 },
        { x1: 400,  y1: 150, x2: 500,  y2: 150 },
        { x1: 600,  y1: 150, x2: 700,  y2: 150 },
        { x1: 800,  y1: 150, x2: 900,  y2: 150 },

        { x1: 0,    y1: 250, x2: 100,  y2: 250 },
        { x1: 200,  y1: 250, x2: 300,  y2: 250 },
        { x1: 400,  y1: 250, x2: 500,  y2: 250 },
        { x1: 600,  y1: 250, x2: 700,  y2: 250 },
        { x1: 800,  y1: 250, x2: 900,  y2: 250 },

        { x1: 1000, y1: 150, x2: 1000, y2: 250 }
    ]

    const lines = lineCoords.map((lineCoord) => {

        const line = design.surface.line()

        line.attr('x1', sizeX(lineCoord.x1))
        line.attr('y1', sizeY(lineCoord.y1))
        line.attr('x2', sizeX(lineCoord.x2))
        line.attr('y2', sizeY(lineCoord.y2))
        line.attr('stroke-width', '1')

        return line

    })

    const loops = loopCoords.map((loopCoord) => {
        
        var loopPath = [
            'M', sizeX(loopCoord.x1), ' ', sizeY(loopCoord.y1),
            'C', sizeX(loopCoord.x1), ' ', sizeY(loopCoord.y1), ' ', 
                 sizeX(loopCoord.x2), ' ', sizeY(loopCoord.y2), ' ',
                 sizeX(loopCoord.x3), ' ', sizeY(loopCoord.y3),
        ].join('');

        console.log(loopPath)

        var loop = design.surface.path(loopPath)

        loop.attr('stroke-width', '1')
        loop.attr('fill', 'none')

        return loop;
    })

    return lines.concat(loops);

    function sizeX(n) {

        return ((n / origSizeX) * reqSize.x) + ''

    }

    function sizeY(n) {

        return reqSize.y * 0.5 + ((n / origSizeY) * reqSize.y) + ''

    }

    function sizeY_rel(n) {

        return ((n / origSizeY) * reqSize.y) + ''

    }
}

module.exports = {

    render: renderGlyph,

    insets: {
        top: 0.4
    }

};
