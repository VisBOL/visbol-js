const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';
const offsetCalculator = require('../offsetCalculator');

const dimensions = [45, 45];
const lower = 3;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    parametric:d="m {scale * 29.000111},{scale * 5.2464081} {scale * 8.5},{scale * 7.4999999} {scale * -8.5},{scale * 7.3333}" 
    fill="none"
    stroke="#03c03c"
    parametric:stroke-width="{scale * 3}"
    stroke-linecap="round"
    stroke-linejoin="round" />
    <path 
    parametric:d="m {scale * 7.5001114},{scale * 39.746408} 0, {scale * -27} {scale * 28.9999996},0" 
    fill="none"
    stroke="#03c03c"
    parametric:stroke-width="{3 * scale}"
    stroke-linecap="round"
    stroke-linejoin="round" />
`;

function Promoter(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props, lower);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <ParametricSVG svgString={defaultString} innerOnly={true} params={{scale: props.size}} />
        </g>
    );
}


module.exports = {
    glyph: Promoter,
    dimensions,
}