const React = require('react');
import { ParamatericSVG } from 'react-parametric-svg';
const offsetCalculator = require('../offsetCalculator');

const dimensions = [45, 45];
const defaultString = `<svg version="1.1"
    xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    opacity="1"
    fill="none"
    fill-opcity="1"
    stroke="red"
    parametric:stroke-width="{1*scale}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1"
    parametric:d="m {8.954485 * scale},{22.605929 * scale} {26.483047 * scale},0"
    />
    <path 
    opacity="1"
    fill="none"
    fill-opacity="1"
    stroke="red"
    parametric:stroke-width="{1*scale}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1"
    parametric:d="m {35.54551 * scale},{18.474574 * scale} 0,{8.050846 * scale}"
    />
    </svg>`;

function Inhibition(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation}) rotate(${props.rotation} ${22.5 * props.size} ${22.5 * props.size})`}>
            <ParamatericSVG svgString={defaultString} innerOnly={true} params={{scale: props.size}} />
        </g>
    );
}


module.exports = {
    hook: Inhibition,
    dimensions,
}