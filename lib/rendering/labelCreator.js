import React from 'react';

import { text_length } from './properties';
import { text_size } from './properties';
import { font } from './properties';

function truncateName(name, length) {
    if(name.length <= length) {
        return name;
    }
    var truncated = '';
    for(let i = 0; i < length - 3; i += 1) {
        truncated += name.charAt(i);
    }
    for(let i = 0; i < 3; i += 1) {
        truncated += '.';
    }
    return truncated;
}

function Label(props) {
    return (
        <text 
        fontFamily={font} 
        fontSize={`${text_size}px`}
        x={props.x + 1}
        y={props.y - 1.5}>
            {truncateName(props.name, text_length)}
        </text>
    )
}

export default Label;