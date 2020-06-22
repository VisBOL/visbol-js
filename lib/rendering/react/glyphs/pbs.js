const dimensions = [52, 45];
const inset = -33;
const lower = 30;
const left = -4;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    parametric:d="M {scale * 10.42} {scale * 44} L {scale * 39.58} {scale * 44} L {scale * 28.37} {scale * 36.15}" 
    fill="none" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 3}" 
    stroke-linejoin="round" 
    stroke-linecap="round" 
    stroke-miterlimit="10" 
    pointer-events="none"> />
`;



module.exports = {
    defaultString,
    dimensions,
    inset,
    lower,
    left
}