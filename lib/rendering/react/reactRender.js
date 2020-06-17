const React = require('react');
const useState = require('react').useState;
const Glyph = require('../../design/glyph');
const Navigator = require('./Navigator');
const Backbone = require('./backbone');
const padding = require('./config').padding;
import { GlyphRenderer } from './GlyphRenderer';
import { HookRenderer } from './HookRenderer';

function Rendering(props) {
    const display = props.display;
    const [size, setSize] = useState(2.5);
    let index = -1;
    const rendering = display.toPlace.map(item => {
        index += 1;
        if (item instanceof Glyph) {
            return <GlyphRenderer 
            key={index}
            height={display.height}
            largestInset={display.largestInset * size}
            size={size}
            padding={padding}
            defaultString={item.defaultString}
            coords={item.coords}
            dimensions={item.dimensions} 
            name={item.name}
            inset={item.inset}
            lower={item.lower}
            />
        }
        else {
            return <HookRenderer 
            key={index}
            height={display.height}
            largestInset={display.largestInset * size}
            size={size}
            padding={padding}
            lower={item.lower}
            defaultString={item.defaultString}
            coords={item.coords}
            dimensions={item.dimensions} 
            rotation = {item.rotation}
            mult = {item.mult}
            />
        }
    });
    return (
        <div className='visbol-container'>
            <Navigator size={size} setSize={setSize}/>
            <div className='visbol-viewport'>
                <svg width={display.width * size + (padding * 2)} height={display.height * size + (padding * 2)}>
                    <Backbone stroke={2 * size} length={display.width * size + padding} x={padding} y={(display.height - display.largestInset) * size + padding}/>
                    {rendering}
                </svg>
            </div>
        </div>
    )
}

module.exports = Rendering;