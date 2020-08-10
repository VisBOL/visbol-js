import React from 'react';
import { ParametricSVG } from 'react-parametric-svg';

const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Spacer"
      soterms=""
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=6;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=40">

<path 
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)},{(baseline_y-baseline_offset)+height} L{(baseline_x+pad_before)+(width*0.37)},{(baseline_y-baseline_offset)+height}" 
      d="M2,37 L16.8,37" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+width-(width*0.37)},{(baseline_y-baseline_offset)+height} L{(baseline_x+pad_before)+width},{(baseline_y-baseline_offset)+height}" 
      d="M27.2,37 L42,37" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path 
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+((width*0.15)*(10.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(10.0/10.0))} L{(baseline_x+pad_before)+((width*0.15)*(8.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(8.0/10.0))}" 
      d="M8.0,25.0 L6.800000000000001,27.4" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+((width*0.15)*(6.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(6.0/10.0))} L{(baseline_x+pad_before)+((width*0.15)*(4.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(4.0/10.0))}" 
      d="M5.6,29.8 L4.4,32.2" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path 
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+((width*0.15)*(2.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(2.0/10.0))} L{(baseline_x+pad_before)+((width*0.15)*(0.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(0.0/10.0))}" 
      d="M3.2,34.6 L2.0,37.0" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path 
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+width-((width*0.15)*(10.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(10.0/10.0))} L{(baseline_x+pad_before)+width-((width*0.15)*(8.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(8.0/10.0))}" 
      d="M36.0,25.0 L37.2,27.4" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+width-((width*0.15)*(6.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(6.0/10.0))} L{(baseline_x+pad_before)+width-((width*0.15)*(4.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(4.0/10.0))}" 
      d="M38.4,29.8 L39.6,32.2" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+width-((width*0.15)*(2.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(2.0/10.0))} L{(baseline_x+pad_before)+width-((width*0.15)*(0.0/10.0))},{(baseline_y-baseline_offset)+height-(height*(0.0/10.0))}" 
      d="M40.8,34.6 L42.0,37.0" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+(width*0.43)},{(baseline_y-baseline_offset)+height} L{(baseline_x+pad_before)+(width*0.47)},{(baseline_y-baseline_offset)+height}" 
      d="M19.2,37 L20.799999999999997,37" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path 
      id="composite-path" 
      parametric:d="M{(baseline_x+pad_before)+(width*0.53)},{(baseline_y-baseline_offset)+height} L{(baseline_x+pad_before)+(width*0.57)},{(baseline_y-baseline_offset)+height}" 
      d="M23.200000000000003,37 L24.799999999999997,37" 
      fill="none"
      stroke="black"
      stroke-width="0.5pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

</svg>`;

function Composite(props) {
    return <ParametricSVG svgString={defaultString} innerOnly={true} params={{baseline_x: props.baseline_x, baseline_y: props.baseline_y, width: props.width}} />
}

module.exports = Composite;