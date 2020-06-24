const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="PrimerBindingSite"
      soterms="SO:0005850"
      parametric:defaults="arrowbody_width=15;arrowhead_height=5;arrowhead_width=5;baseline_offset=3;baseline_x=0;baseline_y=25;pad_after=2;pad_before=2;">

    <path 
        id="primer-binding-site" 
        parametric:d="M{baseline_x+pad_before},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+arrowbody_width},{(baseline_y-baseline_offset)} L{baseline_x+pad_before+arrowbody_width-arrowhead_width},{(baseline_y-baseline_offset)-arrowhead_height}" 
        d="M2,22 L12,22 L9,19" 
        fill="none"
        stroke="black"
        stroke-width="1pt"
        stroke-linejoin="round"
        stroke-linecap="round" />

</svg>`;

const dimensions = [16.9, 6.91666];
const inset = 0;
const lower = 0;
const left = 0;

module.exports = {
    defaultString,
    dimensions,
    inset,
    lower,
    left
}