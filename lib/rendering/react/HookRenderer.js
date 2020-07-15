const React = require('react');
import { ParametricSVG } from 'react-parametric-svg';
import { hook_padding } from './config';

function HookRenderer(props) {
    var paddings = {
        start_x: 0,
        start_y: 0,
        tip_x: 0,
        tip_y: 0,
    }
    switch(props.direction) {
        case 'north': {
            paddings.start_y += hook_padding;
            paddings.tip_y += hook_padding;
            break;
        }
        case 'east': {
            paddings.start_x += hook_padding;
            paddings.tip_x -= hook_padding;
            break;
        }
        default: {
            break;
        }
    }
    return (
        <g transform='translate(1, 0)'>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{
                start_x: props.start.x + paddings.start_x,
                start_y: props.backboneY - props.start.y - paddings.start_y,
                end_x: props.tip.x + paddings.tip_x,
                end_y: props.backboneY - props.tip.y + paddings.tip_y,
                rotation: props.rotation
            }} />
        </g>
    );
}

module.exports = {
    HookRenderer,
}