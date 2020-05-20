const React = require('react');

function Terminator(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={48 * size} height={28.8 * size}>
                <g>
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
                x2={48 * size}
                y2="28.8" 
                />
                </g>
            </svg>
        </div>
    )
}

module.exports = {
    glyph: Terminator,
    dimensions: [48, 28.8]
}