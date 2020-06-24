const React = require('react');
const useState = require('react').useState;
const Glyph = require('../../design/glyph');
const Navigator = require('./Navigator');
const Backbone = require('./backbone');
import { GlyphRenderer } from './GlyphRenderer';
import { HookRenderer } from './HookRenderer';
//import { ParametricSVG } from 'react-parametric-svg';

function Rendering(props) {
    const display = props.display;
    const [size, setSize] = useState(1);
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
                inset={item.inset}
                lower={item.lower}
                left={item.left}
                backboneY={backboneY}
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

/*
function testRendering() {
    const defaultString = `
    <svg  version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:parametric="https://parametric-svg.github.io/v0.2"
        width="100"
        height="100"
        glyphtype="Promoter"
        soterms="SO:0000167"
        parametric:defaults="arrowbody_height=15;arrowbody_width=15;arrowhead_height=4;arrowhead_width=4;baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;">
        <g>
        <path
            id="promoter-body" 
            parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)-arrowbody_height} L{baseline_x+pad_before+arrowbody_width},{(baseline_y-baseline_offset)-arrowbody_height}" 
            d="M2,25 L2,10 L17,10" 
            fill="none"
            stroke="black"
            stroke-width="1pt"
            stroke-linejoin="round"
            stroke-linecap="round" />

        <path
            id="promoter-head" 
            parametric:d="M{baseline_x+pad_before+arrowbody_width-arrowhead_width},{(baseline_y-baseline_offset)-arrowbody_height-arrowhead_height} L{baseline_x+pad_before+arrowbody_width},{(baseline_y-baseline_offset)-arrowbody_height} L{baseline_x+pad_before+arrowbody_width-arrowhead_width},{(baseline_y-baseline_offset)-arrowbody_height+arrowhead_height}" 
            d="M13,6 L17,10 L13,14" 
            fill="none"
            stroke="black"
            stroke-width="1pt"
            stroke-linejoin="round"
            stroke-linecap="round" /> 
        </g>
    </svg>`;

    return (
        <svg className="App" width={200} height={200}>
            <ParametricSVG svgString={defaultString} innerOnly={true}/>
        </svg>
    );
}
*/