const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';
const offsetCalculator = require('../offsetCalculator');

const dimensions = [45, 45];
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    opacity="1"
    fill="none"
    fill-opacity="1"
    stroke="red"
    parametric:stroke-width="{1* scale}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="m {3.4937173 * scale},{22.499997 * scale} {26.4830467 * scale},0" 
    />
    <path
    opacity="1"
    fill="red"
    fill-opacity="1"
    stroke="red"
    parametric:stroke-width="{1 * scale}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="m {32.878941 * scale},{23.095614 * scale} {-7.747004 * scale},{-4.472735 * scale} {7.747004 * scale},{-4.472735 * scale} z" 
    parametric:transform="matrix(0.5, 0.8660254,-0.8660254,0.5,{34.030427 * scale},{-13.049072 * scale})" />
`;

function GeneticProduction(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation}) rotate(-${props.rotation} ${22.5 * props.size} ${22.5 * props.size})`}>
            <ParametricSVG svgString={defaultString} innerOnly={true} params={{scale: props.size}} />
        </g>
    );
}


module.exports = {
    hook: GeneticProduction,
    dimensions,
}