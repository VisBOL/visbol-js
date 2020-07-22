const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="No Glyph"
      soterms=""
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=15;pad_after=2;pad_before=2;width=8">

<path 
      id="operator-background" 
      parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)+(height*0.5)} Z}" 
      d="M2,17.5 L10,14.5 L10,32.5 L2,32.5 Z"
      fill="rgb(255,255,255)"
      fill-rule="nonzero"
      stroke="none" />

<path
      id="no-glyph-path1" 
      parametric:d="M{baseline_x+pad_before+(width*0.3)},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before+(width*0.3)},{(baseline_y-baseline_offset)+(height*0.5)}" 
      d="M4.4,17.5 L2,17.5 L2,32.5 L4.4,32.5" 
      fill="none"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path 
      id="no-glyph-path1" 
      parametric:d="M{baseline_x+pad_before+(width*0.7)},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(height*0.5)} L{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(height*0.5)} L{baseline_x+pad_before+(width*0.7)},{(baseline_y-baseline_offset)+(height*0.5)}" 
      d="M7.6,17.5 L10,17.5 L10,32.5 L7.6,32.5" 
      fill="none"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

</svg>`;

const dimensions = [8, 15];
const inset = 7.5;

export {
    defaultString,
    dimensions,
    inset,
}