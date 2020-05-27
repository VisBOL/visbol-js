const React = require('react');

function Promoter(props) {
    const xTranslation = props.coords[0] * props.size;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size;
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
        <path
        fill="none"
        stroke="#03c03c"
        strokeWidth="5px" 
        strokeLinejoin="round"
        d="M2 38.4L2 9.6L48 9.6L38.4 0M48 9.6L38.4 19.2 "
        />
        <line
        strokeWidth="3px"
        stroke="black"
        x1="0"
        y1="38.4"
        x2={48 * props.size}
        y2="38.4" 
        />
        </g>     
    )
}

module.exports = {
    glyph: Promoter,
    dimensions: [48, 38.4]
}