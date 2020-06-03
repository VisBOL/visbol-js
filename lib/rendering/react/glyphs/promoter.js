const React = require('react');
const Vec2 = require('../../../gatherInfo/originalVisbol/geom/vec2');
const offsetCalculator = require('../offsetCalculator');
const Label = require('../labelCreator');

const dimensions = [40, 38.4];

function createGeometry(dimensions) {
    var arrowForkSize = Vec2(dimensions[1] / 4.0,
        dimensions[1] / 4.0);

    return {
        start: Vec2(0, dimensions[1]),
        turn: Vec2(0, arrowForkSize.y),
        end: Vec2(dimensions[0], arrowForkSize.y),
        topArrowForkEnd: Vec2(dimensions[0] - arrowForkSize.x, 0),
        bottomArrowForkEnd: Vec2(dimensions[0] - arrowForkSize.x, arrowForkSize.y * 2)
    };
}

function renderGlyph(dimensions) {

    var geom = createGeometry(dimensions);

    var path = [

        'M' + Vec2.toPathString(geom.start),
        'L' + Vec2.toPathString(geom.turn),
        'L' + Vec2.toPathString(geom.end),
        'L' + Vec2.toPathString(geom.topArrowForkEnd),
        'M' + Vec2.toPathString(geom.end),
        'L' + Vec2.toPathString(geom.bottomArrowForkEnd)

    ].join('');

    return path;
}

function Promoter(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size]
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    const path = renderGlyph(newDimensions);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
        <path
        fill="none"
        stroke="#03c03c"
        strokeWidth="5px" 
        strokeLinejoin="round"
        d={path}
        />
        <Label name={props.name} size={props.size} />
        </g>
    )
}

module.exports = {
    glyph: Promoter,
    dimensions,
}