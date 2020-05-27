const React = require('react');
const Glyph = require('../../design/glyph');
const padding = require('./config').padding;

function Rendering(props) {
    const display = props.display;
    const size = 1;
    let index = -1;
    const rendering = display.toPlace.map(item => {
        index += 1;
        return <item.rendering key={index}
            height={display.height} 
            coords={item.coords}
            dimensions={item.dimensions} 
            name={item.name}
            size={size}
            padding={padding}
            inset={display.largestInset * size} />
    });
    return (
        <svg width={display.width * size + (padding * 2)} height={display.height * size + (padding * 2)}>
            {rendering}
        </svg>
    )
}

module.exports = Rendering;