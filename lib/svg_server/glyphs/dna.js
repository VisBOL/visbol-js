const defaultString = `
<svg  version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:parametric="https://parametric-svg.github.io/v0.2"
      width="100"
      height="100"
      glyphtype="Spacer"
      soterms=""
      parametric:defaults="baseline_offset=0;baseline_x=0;baseline_y=25;height=10;pad_after=2;pad_before=2;pad_bottom=3;pad_top=3;width=15">

<path
      id="path-1" 
      parametric:d="M{(baseline_x+pad_before)},{(baseline_y-baseline_offset)} t 2,-3 6,1.5 8,-1.5"
      d="M2,25 C5.0,19.0 5.6,31.0 8.666666666666666,25 C11.666666666666666,19.0 12.266666666666666,31.0 15.333333333333332,25 C18.333333333333332,19.0 18.933333333333334,31.0 22.0,25" 
      fill="none"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

<path
      id="path-2" 
      parametric:d="M{(baseline_x+pad_before)},{(baseline_y-baseline_offset-2)} t 2,3 6,-1.5 8,1.5"
      d="M2,25 C5.0,19.0 5.6,31.0 8.666666666666666,25 C11.666666666666666,19.0 12.266666666666666,31.0 15.333333333333332,25 C18.333333333333332,19.0 18.933333333333334,31.0 22.0,25" 
      fill="none"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="round"
      stroke-linecap="round" />

</svg>`;

const dimensions = [20, 3.46];
const inset = 0;

export {
    defaultString,
    dimensions,
    inset,
}

//c 2.5,0 3.5,-3 4.5,-3 s 3.5,3 4.5,3 s 2.5,-3 4.5, -3
/*
<path
      id="path-2" 
      parametric:d="M{(baseline_x+pad_before)},{(baseline_y-baseline_offset-3)} t 3,3 6,-1.5 9,1.5"
      d="M2,25 C5.0,19.0 5.6,31.0 8.666666666666666,25 C11.666666666666666,19.0 12.266666666666666,31.0 15.333333333333332,25 C18.333333333333332,19.0 18.933333333333334,31.0 22.0,25" 
      fill="none"
      stroke="black"
      stroke-width="1pt"
      stroke-linejoin="round"
      stroke-linecap="round" />
      */