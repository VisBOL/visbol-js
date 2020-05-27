const React = require('react');
const length = require('../config').link_length;

function Link(props) {
    const xTranslation = props.coords[0] * props.size + props.padding;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size - props.padding;
    return (
            <g transform={`translate(${xTranslation}, ${yTranslation})`}>
                <line
                strokeWidth="3px"
                stroke="black"
                x1="0"
                y1="0"
                x2={length * props.size}
                y2="0" 
                />
            </g>
    );
}

module.exports = {
    hook: Link,
    dimensions: [length, 0]
}