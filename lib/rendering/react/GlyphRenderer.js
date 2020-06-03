const React = require('react');
const offsetCalculator = require('./offsetCalculator');
import { ParametricSVG } from 'react-parametric-svg';

function GlyphRenderer(props) {
    console.log(props);
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props, props.lower + props.inset);
    console.log('translateX', xTranslation);
    console.log('translateY', yTranslation);
    console.log('lower',props.lower);
    console.log('inset',props.inset);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{scale: props.size}} />
        </g>
    );
}

module.exports = {
    GlyphRenderer,
}