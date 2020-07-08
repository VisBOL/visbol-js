import React, { useRef, useState, useEffect } from 'react';
const Glyph = require('../../design/glyph');
const Navigator = require('./Navigator');
const Backbone = require('./backbone');
import { GlyphRenderer } from './GlyphRenderer';
import { HookRenderer } from './HookRenderer';

function Rendering(props) {
    const display = props.display;
    const [size, setSize] = useState(1);
    const [dimensions, setDimensions] = useState([0, 0]);
    const content = useRef(null);
    const backboneY = (display.height - display.largestInset);
    const rendering = getRendering(display, backboneY);
    useEffect(() => {
        const bb = content.current.getBoundingClientRect();
        setDimensions([bb.width + 3 * size, bb.height + 5 * size]);
    }, [content.current, size]);
    return (
        <div className='visbol-container'>
            <Navigator size={size} setSize={setSize} />
            <div className='rendering'>
                <svg className='visbol-viewport' width={dimensions[0]} height={dimensions[1]} style={{ padding: (10 * size) + 'px' }}>
                    <g transform={`scale(${size}) translate(1,0)`} ref={content}>
                        <Backbone stroke={1} length={display.width} x={0} y={backboneY} />
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
            />
        }
    });
    return rendering;
}

module.exports = Rendering;