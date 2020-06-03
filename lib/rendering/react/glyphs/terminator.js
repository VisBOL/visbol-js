const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';
const offsetCalculator = require('../offsetCalculator');

const dimensions = [45, 45];
const lower = 8;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    parametric:d="m {scale * 22.499997},{scale * 34.989391} 0,{scale * -24.000001}" 
    fill="none"
    stroke="#c23b22"
    parametric:stroke-width="{scale * 3}"
    stroke-linecap="round"
    stroke-linejoin="round" />
    <path 
    parametric:d="m {scale * 7.4999973},{scale * 9.9893904} {scale * 29.9999997},0" 
    fill="none"
    stroke="#c23b22"
    parametric:stroke-width="{scale * 3}"
    stroke-linecap="round"
    stroke-linejoin="round" />
`;

function Terminator(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props, lower);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <ParametricSVG svgString={defaultString} innerOnly={true} params={{scale: props.size}} />
        </g>
    );
}


module.exports = {
    glyph: Terminator,
    dimensions,
}