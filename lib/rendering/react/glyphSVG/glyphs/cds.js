const React = require('react');

function Cds(props) {
    const xTranslation = props.coords[0] * props.size;
    const yTranslation = (props.height - props.coords[1] - props.dimensions[1]) * props.size;
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <path 
            d="M0 0L33.6 0L48 14.399999999999999L33.6 28.799999999999997L0 28.799999999999997z " 
            stroke="black"
            fill="#779ecb"
            />
        </g>
    )
}



module.exports = {
    glyph: Cds,
    dimensions: [35, 35]
}