const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';

function HookRenderer(props) {
    return (
        <g transform='translate(-0.5, 0)'>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{
                start_x: props.start.x,
                start_y: props.backboneY - props.start.y,
                end_x: props.tip.x,
                end_y: props.backboneY - props.tip.y,
                rotation: props.rotation
            }} />
        </g>
    );
}

module.exports = {
    HookRenderer,
}

//transform={`rotate(${props.rotation} ${props.dimensions[0] / 2} ${props.dimensions[0] / 2})`