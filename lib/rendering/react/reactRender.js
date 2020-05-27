const React = require('react');
const Glyph = require('../../design/glyph');

function Rendering(props) {
    const display = props.display;
    const size = 1;
    let index = -1;
    const rendering = display.toPlace.map(item => {
        index += 1;
        if (item instanceof Glyph) {
            return <item.rendering key={index}
                height={display.height} 
                coords={item.coords}
                dimensions={item.dimensions} 
                name={item.name}
                size={size} />
        }
    });
    return (
        <svg width={display.width} height={display.height}>
            {rendering}
        </svg>
    )
}

module.exports = Rendering;