const React = require('react');

function Protein(props) {
    const xTranslation = props.coords[0] * props.size;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size;
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <g>
            <ellipse
            rx="20" 
            ry="20" 
            cx="24" 
            cy="24" 
            stroke="black" 
            fill="#f1948a" 
            strokeWidth="2px" 
            strokeLinejoin="round"
            />
            <ellipse 
            rx="6"
            ry="5"
            cx="9.6"
            cy="42.63636363636363"
            stroke="black"
            fill="#f1948a"
            strokeWidth="2px"
            strokeLinejoin="round"
            />
            <rect 
            width="8" 
            height="5.333333333333333" 
            stroke="dark gray" 
            fill="#f1948a" 
            strokeWidth="2px" 
            strokeLinejoin="round" 
            x="10" 
            y="35.55555555555555"
            />
            </g>
        </g>
    );
}

module.exports = {
    glyph: Protein,
    dimensions: [40.4, 48.64]
}