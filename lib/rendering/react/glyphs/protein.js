const React = require('react');

const dimensions = [48, 48];

function Protein(props) {
    const newDimensions = [dimensions[0] * props.size, dimensions[1] * props.size];
    const xTranslation = props.coords[0] * props.size + props.padding;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size - props.padding;
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <g>
            <ellipse
            rx={newDimensions[0] / 2 - 4} 
            ry={newDimensions[1] / 2 - 4} 
            cx={newDimensions[0] / 2} 
            cy={newDimensions[1] / 2} 
            stroke="black" 
            fill="#f1948a" 
            strokeWidth="2px" 
            strokeLinejoin="round"
            />
            <ellipse 
            rx={newDimensions[0] / 8}
            ry={newDimensions[1] / 8}
            cx={newDimensions[0] / 5}
            cy={newDimensions[1] / 1.15}
            stroke="black"
            fill="#f1948a"
            strokeWidth="2px"
            strokeLinejoin="round"
            />
            <rect 
            width={newDimensions[0] / 6} 
            height={newDimensions[1] / 9}
            stroke="dark gray" 
            fill="#f1948a" 
            strokeWidth="2px" 
            strokeLinejoin="round" 
            x={newDimensions[0] / 4.8} 
            y={newDimensions[1] / 1.35}
            />
            </g>
        </g>
    );
}

module.exports = {
    glyph: Protein,
    dimensions
}