const React = require('react');

function Promoter(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={50 * size} height={38.4 * size}>
                <g>
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
                x2={48 * size}
                y2="38.4" 
                />
                </g>
            </svg>
        </div>
    )
}

module.exports = {
    glyph: Promoter,
    dimensions: [48, 38.4]
}