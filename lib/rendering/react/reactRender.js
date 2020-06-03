const React = require('react');
const useState = require('react').useState;
const Navigator = require('./Navigator');
const Backbone = require('./backbone');
const padding = require('./config').padding;

function Rendering(props) {
    const display = props.display;
    const [size, setSize] = useState(1);
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
            inset={display.largestInset * size}
            rotation={item.rotation} />
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