const React = require('react');
const useState = require('react').useState;
const Glyph = require('../../design/glyph');
const Navigator = require('./Navigator');
const Backbone = require('./backbone');
import { GlyphRenderer } from './GlyphRenderer';
import { HookRenderer } from './HookRenderer';
import Tooltip from './Tooltip';

function Rendering(props) {
    const display = props.display;
    const [size, setSize] = useState(3);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState('');
    const [tooltipCoords, setTooltipCoords] = useState([0, 0]);
    let index = -1;
    const backboneY = (display.height - display.largestInset);
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
                setShowTooltip={setShowTooltip}
                setTooltipText={setTooltipText}
                setTooltipCoords={setTooltipCoords}
            />
        }
        else {
            return <HookRenderer
                key={index}
                defaultString={item.defaultString}
                start={item.startGlyph}
                destination={item.destinationGlyph}
                rotation={item.rotation}
                backboneY={backboneY}
            />
        }
    });
    //<Tooltip showTooltip={showTooltip} tooltip={tooltipText} top={tooltipCoords[0]} left={tooltipCoords[1]} />
    return (
        <div className='visbol-container'>
            <Navigator size={size} setSize={setSize} />
            <div className='rendering'>
                <svg className='visbol-viewport' width={display.width * size} height={display.height * size}>
                    <g transform={`scale(${size})`}>
                        <Backbone stroke={1} length={display.width} x={0} y={backboneY} />
                        {rendering}
                    </g>
                </svg>
            </div>               
        </div>
    )
}

module.exports = Rendering;