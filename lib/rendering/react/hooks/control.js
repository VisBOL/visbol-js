const dimensions = [45, 45];
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    opacity="1"
    fill="none"
    fill-opacity="1"
    stroke="red"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="m {scale * 3.4937173},{scale * 22.447031} {scale * 26.4830467},0" />
    <rect 
    opacity="1"
    fill="none"
    fill-opacity="1"
    stroke="red"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:width="{scale * 7.7330499}" 
    parametric:height="{scale * 7.7330499}" 
    parametric:x="{scale * 37.172684}" 
    parametric:y="{scale * -13.085931}" 
    transform="matrix(0.70710678,0.70710678,-0.70710678,0.70710678,0,0)" />
`;


module.exports = {
    defaultString,
    dimensions
}