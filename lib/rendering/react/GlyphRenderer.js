import React from 'react';
import { ParametricSVG } from 'react-parametric-svg';
import Label from './labelCreator';

function GlyphRenderer(props) {
    var baseline_y = props.backboneY - props.coords[1];
    var baseline_x = props.coords[0];
    if (props.coords[1] !== 0) { //glyph isn't on baseline
        baseline_y -= props.inset;
    }
    return (
        <g
        data-toggle='tooltip'
        data-placement='top'
        title={props.tooltip}
        data-uri={props.uri}>
            <Label name={props.name} x={props.labelLocation.x} y={props.backboneY - props.labelLocation.y}/>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{baseline_x: baseline_x, baseline_y: baseline_y}} />
        </g>
    );
}

module.exports = {
    GlyphRenderer,
}