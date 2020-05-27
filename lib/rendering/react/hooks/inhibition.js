const React = require('react');
const Vec2 = require('../../../gatherInfo/originalVisbol/geom/vec2');

const dimensions = [48, 48];

function createGeometry(dimensions) {
   
    return {
         
        top: Vec2(dimensions[0] / 2,0),
        bottomLeft: Vec2(dimensions[0] / 4, dimensions[1] * 0.6),
        bottomRight: Vec2((dimensions[0] * 3) / 4, dimensions[1] * 0.6),
        middleBottom: Vec2(dimensions[0] / 2, dimensions[1] * 0.6)

    };
}

function renderGlyph(dimensions) {

    var geom = createGeometry(dimensions);

    var path = [

        'M' + Vec2.toPathString(geom.top),
        'L' + Vec2.toPathString(geom.middleBottom),
        'M' + Vec2.toPathString(geom.bottomLeft),
        'L' + Vec2.toPathString(geom.bottomRight)

    ].join('');

    return path;
}

function Inhibition(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size];
    const xTranslation = props.coords[0] * props.size + props.padding;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size - props.padding;
    const path = renderGlyph(newDimensions);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <path 
            d={path}
            stroke="red"
            strokeWidth="3px"
            fill="red"/>
        </g>
    );
}

module.exports = {
    hook: Inhibition,
    dimensions,
}