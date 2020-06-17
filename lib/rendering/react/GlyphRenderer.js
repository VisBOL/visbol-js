const React = require('react');
const offsetCalculator = require('./offsetCalculator');
import LabelCreator from './labelCreator';
import { ParametricSVG } from 'react-parametric-svg';

function GlyphRenderer(props) {
    const xTranslation = offsetCalculator.xTranslation(props);
    const yTranslation = offsetCalculator.yTranslation(props, props.lower + props.inset);
    return (
        <g transform={`translate(${xTranslation}, ${yTranslation})`}>
            <LabelCreator name={props.name} size={props.size} move={props.lower}/>
            <g transform={`translate(${props.left * props.size}, 0)`}>
                <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{scale: props.size}} />
            </g>
        </g>
    );
}

module.exports = {
    GlyphRenderer,
}