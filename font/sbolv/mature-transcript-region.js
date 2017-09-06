
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
        backboneOffset: boxSize.y / 4
    };
}

function createPaths(design, glyphObject, reqSize) {

    const origSizeX = 1000;
    const origSizeY = 1000;

    const body = design.surface.rect(reqSize.x, sizeY(250));
    body.attr('stroke-width', '1')
    body.attr('fill', glyphObject.color || '#03c03c')

    const lineCoords = [
        { x1: 0,    y1: -100, x2: 0,    y2: 0 },
        { x1: 50,   y1: -100, x2: 50,   y2: 0 },
        { x1: 100,  y1: -100, x2: 100,  y2: 0 },
        { x1: 150,  y1: -100, x2: 150,  y2: 0 },
        { x1: 200,  y1: -100, x2: 200,  y2: 0 },
        { x1: 250,  y1: -100, x2: 250,  y2: 0 },
        { x1: 300,  y1: -100, x2: 300,  y2: 0 },
        { x1: 350,  y1: -100, x2: 350,  y2: 0 },
        { x1: 400,  y1: -100, x2: 400,  y2: 0 },
        { x1: 450,  y1: -100, x2: 450,  y2: 0 },
        { x1: 500,  y1: -100, x2: 500,  y2: 0 },
        { x1: 550,  y1: -100, x2: 550,  y2: 0 },
        { x1: 600,  y1: -100, x2: 600,  y2: 0 },
        { x1: 650,  y1: -100, x2: 650,  y2: 0 },
        { x1: 700,  y1: -100, x2: 700,  y2: 0 },
        { x1: 750,  y1: -100, x2: 750,  y2: 0 },
        { x1: 800,  y1: -100, x2: 800,  y2: 0 },
        { x1: 850,  y1: -100, x2: 850,  y2: 0 },
        { x1: 900,  y1: -100, x2: 900,  y2: 0 },
        { x1: 950,  y1: -100, x2: 950,  y2: 0 },
        { x1: 1000, y1: -100, x2: 1000, y2: 0 },
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

    return lines.concat([body]);

    function sizeX(n) {

        return ((n / origSizeX) * reqSize.x) + ''

    }

    function sizeY(n) {

        return ((n / origSizeY) * reqSize.y) + ''

    }
}

module.exports = {

    render: renderGlyph,

};
