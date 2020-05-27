const React = require('react');
const Vec2 = require('../../../gatherInfo/originalVisbol/geom/vec2');
const offsetCalculator = require('../offsetCalculator');

const dimensions = [48, 48];

function createGeometry(dimensions) {
   
    return {
         
        top: Vec2(dimensions[0] / 2, dimensions[1] / 4),
        bottom: Vec2(dimensions[0] / 2, dimensions[1] * 0.8),
        left: Vec2(dimensions[0] / 3, dimensions[1] / 4),
        right: Vec2((dimensions[0] * 2) / 3, dimensions[1] / 4),
        arrowTop:Vec2(dimensions[0] / 2, dimensions[1] * 0.1) 

    };
}

function renderGlyph(dimensions) {

    var geom = createGeometry(dimensions);

    var path = [

        'M' + Vec2.toPathString(geom.top),
        'L' + Vec2.toPathString(geom.bottom),
        'M' + Vec2.toPathString(geom.left),
        'L' + Vec2.toPathString(geom.right),
        'L' + Vec2.toPathString(geom.arrowTop),
        'Z'

    ].join('');

    return path;
}

function GeneticProduction(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size];
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    const path = renderGlyph(newDimensions);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <path
            d={path}
            stroke="red"
            fill="red"
            strokeWidth="3px"/>
        </g>
    );
}


module.exports = {
    hook: GeneticProduction,
    dimensions,
}