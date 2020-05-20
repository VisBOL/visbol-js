const React = require('react');
const Glyph = require('../../design/glyph');
const GlyphSelector = require('./glyphSVG/GlyphSelector');
const HookSelector = require('./hookSVG/HookSelector');

function Rendering(props) {
    const display = props.display;
    const size = 1;
    let index = -1;
    const rendering = display.toPlace.map(item => {
        index += 1;
        if (item instanceof Glyph) {
            const GlyphSVG = GlyphSelector[item.type].glyph;
            return <GlyphSVG key={index} 
                coords={item.coords} 
                name={item.name}
                size={size} />
        }
        else {
            const HookSVG = HookSelector[item.type].hook;
            return <HookSVG key={index} 
            coords={item.coords}
            name={item.type}
            size={size} />
        }
    });
    return (
        <div>
            {rendering}
        </div>
    )
}

module.exports = Rendering;