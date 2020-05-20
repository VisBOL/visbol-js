const React = require('react');

function GeneticProduction(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={35 * size} height={28.8 * size}>
                <path
                d="M24 0L24 28.799999999999997M12 28.799999999999997L36 28.799999999999997 "
                stroke="red"
                strokeWidth="3px"/>
            </svg>
        </div>
    );
}


module.exports = {
    hook: GeneticProduction,
    dimensions: [24, 32]
}