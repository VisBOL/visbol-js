const React = require('react');
const Vec2 = require('../../../gatherInfo/originalVisbol/geom/vec2');
const offsetCalculator = require('../offsetCalculator');

const dimensions = [48, 28.8];
const inset = 14.4;

function createGeometry(dimensions) {

    var headWidth = dimensions[1] / 2.0;

    return {
        boxStart: Vec2(0, 0),
        boxTopRight: Vec2(dimensions[0] - headWidth, 0),
        headPoint: Vec2(dimensions[0], dimensions[1] / 2.0),
        boxBottomRight: Vec2(dimensions[0] - headWidth, dimensions[1]),
        boxBottomLeft: Vec2(0, dimensions[1])
    };
}

function renderGlyph(dimensions) {

    var geom = createGeometry(dimensions);

    var path = [

        'M' + Vec2.toPathString(geom.boxStart),
        'L' + Vec2.toPathString(geom.boxTopRight),
        'L' + Vec2.toPathString(geom.headPoint),
        'L' + Vec2.toPathString(geom.boxBottomRight),
        'L' + Vec2.toPathString(geom.boxBottomLeft),
        'Z'

    ].join('');

    return path
}

function Cds(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size]
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props, inset);
    const path = renderGlyph(newDimensions);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <path 
            d={path}
            stroke="black"
            fill="#779ecb"
            />
        </g>
    )
}



module.exports = {
    glyph: Cds,
    dimensions,
    inset
}