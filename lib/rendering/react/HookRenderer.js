const React = require('react');
const offsetCalculator = require('./offsetCalculator');
import { ParametricSVG } from 'react-parametric-svg';

function HookRenderer(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation}) rotate(${props.rotation * props.mult} ${props.dimensions[0] / 2 * props.size} ${props.dimensions[0] / 2 * props.size})`}>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{
                scale: props.size,
                lower: props.lower
            }} />
        </g>
    );
}

module.exports = {
    HookRenderer,
}