const React = require('react');

function Inhibition(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={35 * size} height={33.6 * size}>
                <path 
                d="M24 12L24 38.400000000000006M16 12L32 12L24 4.800000000000001z "
                stroke="red"
                strokeWidth="3px"
                fill="red"/>
            </svg>
        </div>
    );
}

module.exports = {
    hook: Inhibition,
    dimensions: [16, 33.6]
}