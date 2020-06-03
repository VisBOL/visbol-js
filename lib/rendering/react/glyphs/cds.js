const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';
const offsetCalculator = require('../offsetCalculator');

const dimensions = [45, 45];
const lower = 10;
const inset = 13;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    parametric:d="m {scale * 5.2562231},{scale * 33.900582} {scale * 23.6111729},0 {scale * 10.876433},{scale * -11.400584} {scale * -10.876433},{scale * -11.400585} {scale * -23.6111729},0 z" 
    fill="#779ecb"
    stroke="#000000"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="round"
    stroke-linejoin="round" />
`;

function Cds(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props, lower + inset);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <ParametricSVG svgString={defaultString} innerOnly={true} params={{scale: props.size}} />
        </g>
    );
}


module.exports = {
    glyph: Cds,
    dimensions,
    inset
}