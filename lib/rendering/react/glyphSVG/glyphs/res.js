const React = require('react');

function Res(props) {
    const xTranslation = props.coords[0] * props.size;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size;
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
        <path 
        d="M0 21.599999999999998L28.799999999999997 21.599999999999998C28.799999999999997 0 0 0 0 21.599999999999998z "
        stroke="black"
        fill="#966fd6"
        />
        <line
        strokeWidth="3px"
        stroke="black"
        x1="0"
        y1="23"
        x2={28.8 * props.size}
        y2="23"
        />
        </g>
    );
}

module.exports = {
    glyph: Res,
    dimensions: [28.8, 16.2]
}