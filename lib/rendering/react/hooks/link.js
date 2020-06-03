const React = require('react');
const length = require('../config').link_length;
const offsetCalculator = require('../offsetCalculator');

function Link(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    return (
            <g transform={`translate(${xTranslation}, ${yTranslation})`}>
                <line
                strokeWidth="3px"
                stroke="black"
                x1="0"
                y1="0"
                x2={0}
                y2="0" 
                />
            </g>
    );
}

module.exports = {
    hook: Link,
    dimensions: [0, 0]
}