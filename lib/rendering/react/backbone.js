import React from 'react';
import { ParametricSVG } from 'react-parametric-svg';

const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="stroke=1;length=1;x=0;y=0">
    <line
    parametric:stroke-width="{stroke}"
    stroke="black"
    parametric:x1="{x}"
    parametric:y1="{y}"
    parametric:x2="{length}"
    parametric:y2="{y}"
    />
`

function Backbone(props) {
    return (
        <g>
            <ParametricSVG svgString={defaultString} innerOnly={true} params={{
                stroke: props.stroke, 
                length: props.length,
                x: props.x,
                y: props.y
                }} />
        </g>
    );
}

module.exports = Backbone;