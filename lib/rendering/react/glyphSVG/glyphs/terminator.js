const React = require('react');

function Terminator(props) {
    const xTranslation = props.coords[0] * props.size;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size;
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
        <path
        d="M24 28.799999999999997L24 0M0 0L48 0 "
        stroke="#c23b22" 
        strokeWidth="5px"
        strokeLinejoin="round"
        fill="none"
        />
        <line
        strokeWidth="3px"
        stroke="black"
        x1="0"
        y1="28.8"
        x2={48 * props.size}
        y2="28.8" 
        />
        </g>
    )
}

module.exports = {
    glyph: Terminator,
    dimensions: [48, 28.8]
}