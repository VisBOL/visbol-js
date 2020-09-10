import React, { useState } from 'react';
import Glyph from '../../design/glyph';
import Navigator from './Navigator';
import Backbone from './Backbone';
import { GlyphRenderer } from './GlyphRenderer';
import { HookRenderer } from './HookRenderer';

function Rendering(props) {
    const display = props.display;
    const [size, setSize] = useState(3);
    const [safety, setSafety] = useState(15);
    const backboneY = (display.height - display.largestInset);
    const rendering = getRendering(display, backboneY, size);
    return (
        <div className='visbol-container'>
            <Navigator size={size} setSize={setSize} />
            <div className='rendering'>
                <svg className='visbol-viewport' width={(display.width + safety) * size} height={(display.height + display.largestInset + safety) * size} style={{ padding: (10 * size) + 'px' }}>
                    <g transform={`scale(${size}) translate(${safety / 2}, ${display.largestInset + safety / 2})`}>
                        <Backbone stroke={1} length={display.width + safety / 4} x={0} y={backboneY} topologies={display.topologies} setSafety={setSafety} />
                        {rendering}
                    </g>
                </svg>
            </div>               
        </div>
    )
}

function getRendering(display, backboneY) {
    let index = -1;
    const rendering = display.toPlace.map(item => {
        index += 1;
        if (item instanceof Glyph) {
            return <GlyphRenderer
                key={index}
                defaultString={item.defaultString}
                coords={item.coords}
                name={item.name}
                tooltip={item.tooltip}
                uri={item.uri}
                inset={item.inset}
                labelLocation={item.labelLocation}
                isComposite={item.isComposite}
                strand={item.strand}
                width={item.dimensions[0]}
                backboneY={backboneY}
            />
        }
        else {
            return <HookRenderer
                key={index}
                defaultString={item.defaultString}
                start={item.start}
                tip={item.tip}
                rotation={item.rotation}
                backboneY={backboneY}
                direction={item.direction}
            />
        }
    });
    return rendering;
}

export default Rendering;