const React = require('react');

function Cds(props) {
    const size = props.size;
    return (
        <div style={{
            position: "absolute",
            bottom: props.coords[1]*size,
            left: props.coords[0]*size
        }}>
            <svg width={48 * size} height={28.8 * size}>
                <path 
                d="M0 0L33.6 0L48 14.399999999999999L33.6 28.799999999999997L0 28.799999999999997z " 
                stroke="black"
                fill="#779ecb"
                />
            </svg>
        </div>
    )
}



module.exports = {
    glyph: Cds,
    dimensions: [35, 35]
}