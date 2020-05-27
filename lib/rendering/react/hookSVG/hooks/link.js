const React = require('react');
const length = require('../../config').link_length;

function Link(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={length * size} height={3 * size}>
                <line
                strokeWidth="3px"
                stroke="black"
                x1="0"
                y1="3"
                x2={length * size}
                y2="3" 
                />
            </svg>
        </div>
    );
}

module.exports = {
    hook: Link,
    dimensions: [length, 0]
}