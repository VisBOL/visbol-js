const defaultString = `
<svg version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="start_x=0;start_y=25;end_x=0;end_y=0;pad_after=2;width=10;pad_before=2;rotation=0;">
        <path 
        opacity="1"
        fill="none"
        fill-opacity="1"
        stroke="red"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="round"
        stroke-miterlimit="4"
        stroke-dasharray="none"
        stroke-dashoffset="0"
        stroke-opacity="1"
        parametric:d="M {start_x} {start_y} L {end_x} {end_y}"
        />
        <path 
        opacity="1"
        fill="none"
        fill-opacity="1"
        stroke="red"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="round"
        stroke-miterlimit="4"
        stroke-dasharray="none"
        stroke-dashoffset="0"
        stroke-opacity="1"
        parametric:d="M {start_x - (width / 2)} {start_y} L {start_x + (width / 2)} {start_y}"
        parametric:transform="rotate({rotation} {start_x} {start_y})"
        />
</svg>`;

const dimensions = [9.5, 28.05];

module.exports = {
    defaultString,
    dimensions,
    mult: -1
}