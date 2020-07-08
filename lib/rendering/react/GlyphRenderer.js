import React from 'react';
import { ParametricSVG } from 'react-parametric-svg';

function GlyphRenderer(props) {
    return (
        <g
        data-toggle='tooltip'
        data-placement='top'
        title={props.tooltip}
        data-uri={props.uri}>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{baseline_x: props.coords[0], baseline_y: props.backboneY - props.coords[1]}} />
        </g>
    );
}

module.exports = {
    GlyphRenderer,
}