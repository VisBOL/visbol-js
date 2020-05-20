const React = require('react');

function Res(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={28.8 * size} height={23 * size}>
                <g>
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
                x2={28.8 * size}
                y2="23"
                />
                </g>
            </svg>
        </div>
    );
}

module.exports = {
    glyph: Res,
    dimensions: [28.8, 16.2]
}