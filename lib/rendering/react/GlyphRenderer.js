import React, { useRef } from 'react';
import { ParametricSVG } from 'react-parametric-svg';

function GlyphRenderer(props) {
    const group = useRef(null);
    return (
        <g
        ref={group} 
        onMouseEnter={(e) => {
            const box = group.current.getBBox();
            props.setTooltipText(props.tooltip);
            props.setShowTooltip(true);
            props.setTooltipCoords([box.x, box.y]);
        }}
        onMouseLeave={() => {
            props.setShowTooltip(false);
        }}
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