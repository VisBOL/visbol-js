const React = require('react');
const Vec2 = require('../../../gatherInfo/originalVisbol/geom/vec2');
const offsetCalculator = require('../offsetCalculator');

const dimensions = [28.8, 21.6];

function createGeometry(dimensions) {

    return {
        boxBottomLeft: Vec2(0, dimensions[1]),
        boxBottomRight: Vec2(dimensions[0], dimensions[1]),
        boxTopRight: Vec2(dimensions[0], 0),
        boxTopLeft: Vec2(0, 0),
    };
}

function renderGlyph(dimensions) {

    var geom = createGeometry(dimensions);

    var path = [

        'M' + Vec2.toPathString(geom.boxBottomLeft),
        'L' + Vec2.toPathString(geom.boxBottomRight),
        'C' + Vec2.toPathString(geom.boxTopRight) + ' ' + Vec2.toPathString(geom.boxTopLeft)
            + ' ' + Vec2.toPathString(geom.boxBottomLeft),
        'Z'

    ].join('');

    return path;
}

function Res(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size];
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    const path = renderGlyph(newDimensions);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
        <path 
        d={path}
        stroke="black"
        fill="#966fd6"
        />
        <line
        strokeWidth="3px"
        stroke="black"
        x1="0"
        y1={newDimensions[1]}
        x2={newDimensions[0]}
        y2={newDimensions[1]}
        />
        </g>
    );
}

module.exports = {
    glyph: Res,
    dimensions,
}