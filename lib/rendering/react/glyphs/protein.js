const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Protein"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;width=15">

    <path 
        id="protein" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)} C{baseline_x+pad_before},{(baseline_y-baseline_offset)-(width/1.5)} {baseline_x+pad_before+width},{(baseline_y-baseline_offset)-(width/1.5)} {baseline_x+pad_before+width},{(baseline_y-baseline_offset)} C{baseline_x+pad_before+width},{(baseline_y-baseline_offset)+(width/1.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)+(width/1.5)} {baseline_x+pad_before},{(baseline_y-baseline_offset)} Z" 
        d="M2,25 C2,11.666666666666666 22,11.666666666666666 22,25 C22,38.333333333333336 2,38.333333333333336 2,25 Z" 
        fill="rgb(241,148,138)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt" />
    <circle 
    parametric:cx="{baseline_x + width / 4}"
    parametric:cy="{baseline_y + width / 2.5}"
    parametric:r="{width / 7}"
    fill="rgb(241,148,138)"
        fill-rule="nonzero"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="miter"
        stroke-linecap="butt"
    />
    <rect 
    fill="rgb(241,148,138)"
    parametric:x="{baseline_x + width / 4}"
    parametric:y="{baseline_y - width / 10}"
    parametric:width="{width / 2}"
    parametric:height="{width / 2}"
    />

</svg>`;

const dimensions = [15, 15];
const inset = 7.5;

export {
    defaultString,
    dimensions,
    inset,
}