const React = require('react');

function Protein(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={45.4 * size} height={48.64 * size}>
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
            </svg>
        </div>
    );
}

module.exports = {
    glyph: Protein,
    dimensions: [40.4, 48.64]
}