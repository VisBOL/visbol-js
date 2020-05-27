const React = require('react');
const Vec2 = require('../../../gatherInfo/originalVisbol/geom/vec2');
const offsetCalculator = require('../offsetCalculator');
const Label = require('../labelCreator');

const dimensions = [48, 28.8]

function createGeometry(dimensions) {

    return {
        stemBottom: Vec2(dimensions[0] / 2.0, dimensions[1]),
        stemTop: Vec2(dimensions[0] / 2.0, 0),
        topLeft: Vec2(0, 0),
        topRight: Vec2(dimensions[0], 0),
    };
}

function renderGlyph(dimensions) {

    var geom = createGeometry(dimensions);

    var path = [

        'M' + Vec2.toPathString(geom.stemBottom),
        'L' + Vec2.toPathString(geom.stemTop),
        'M' + Vec2.toPathString(geom.topLeft),
        'L' + Vec2.toPathString(geom.topRight),

    ].join('');

    return path;
}

function Terminator(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size];
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    const path = renderGlyph(newDimensions);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
        <path
        d={path}
        stroke="#c23b22" 
        strokeWidth="5px"
        strokeLinejoin="round"
        fill="none"
        />
        <line
        strokeWidth="3px"
        stroke="black"
        x1="0"
        y1={newDimensions[1]}
        x2={newDimensions[0]}
        y2={newDimensions[1]}
        />
        <Label name={props.name} size={props.size} />
        </g>
    )
}

module.exports = {
    glyph: Terminator,
    dimensions,
}