import React from 'react';
import { ParametricSVG } from 'react-parametric-svg';
import Label from './LabelCreator';
import Composite from './Composite';

function GlyphRenderer(props) {
    var baseline_y = props.backboneY - props.coords[1];
    var baseline_x = props.coords[0];
    if (props.coords[1] !== 0) { //glyph isn't on baseline
        baseline_y -= props.inset;
    }
    var composite = null;
    if(props.isComposite) {
        composite = <Composite baseline_x={baseline_x} baseline_y={baseline_y + props.inset} width={props.width}/>
    }
    var rotate = 0;
    if(props.strand === 'negative') {
        rotate = 180;
    }
    return (
        <g
        data-toggle='tooltip'
        data-placement='top'
        title={props.tooltip}
        data-uri={props.uri}
        transform={`rotate(${rotate},${baseline_x + props.width / 2},${baseline_y})`}>
            <Label name={props.name} x={props.labelLocation.x} y={props.backboneY - props.labelLocation.y}/>
            <ParametricSVG svgString={props.defaultString} innerOnly={true} params={{baseline_x: baseline_x, baseline_y: baseline_y}} />
            {composite}
        </g>
    );
}

export {
    GlyphRenderer
}