const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';

function HookRenderer(props) {
    var end_x = 10;
    var end_y = 50;
    if (props.destination) {
        end_x = props.destination.coords[0] + props.destination.dimensions[0] / 2;
        end_y = props.destination.coords[1];
    }
    return (
        <g>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{
                start_x: props.start.coords[0] + props.start.dimensions[0] / 2,
                start_y: props.backboneY - (props.start.coords[0] + props.start.dimensions[1]),
                end_x,
                end_y,
                rotation: props.rotation
            }} />
        </g>
    );
}

module.exports = {
    HookRenderer,
}

//transform={`rotate(${props.rotation} ${props.dimensions[0] / 2} ${props.dimensions[0] / 2})`