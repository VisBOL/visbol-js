const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Terminator"
      soterms="SO:0000141"
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;body_height=15;head_width=13;pad_after=2;pad_before=2;">

    <path
        id="terminator-body" 
        parametric:d="M{baseline_x+pad_before+(head_width/2.0)},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+(head_width/2.0)},{(baseline_y-baseline_offset)-body_height}" 
        d="M6.0,25 L6.0,15" 
        fill="none"
        stroke="red"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round"/>

    <path 
        id="terminator-head" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)-body_height} L{baseline_x+pad_before+head_width},{(baseline_y-baseline_offset)-body_height}" 
        d="M2,15 L10,15" 
        fill="none"
        stroke="red"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round"/>

</svg>`;

const dimensions = [13, 15];
const inset = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
}