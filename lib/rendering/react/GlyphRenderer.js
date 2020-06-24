const React = require('react');
import LabelCreator from './labelCreator';
import { ParametricSVG } from 'react-parametric-svg';
//<LabelCreator name={props.name} move={props.lower}/>

function GlyphRenderer(props) {
    return (
        <g>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{baseline_x: props.coords[0], baseline_y: props.backboneY - props.coords[1]}} />
        </g>
    );
}

module.exports = {
    GlyphRenderer,
}