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
                coords={item.coords} 
                name={item.name}
                size={size} />
        }
    });
    return (
        <svg>
            {rendering}
        </svg>
    )
}

module.exports = Rendering;