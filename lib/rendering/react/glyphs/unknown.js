const dimensions = [45, 45];
const inset = -3;
const lower = 8;
const left = -8;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    parametric:d="M {scale * 20.51} {scale * 13.07} L {scale * 14.58} {scale * 13.07} L {scale * 14.58} {scale * 36.93} L {scale * 20.51} {scale * 36.93}" 
    fill="none" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 1}" 
    stroke-miterlimit="4" 
    pointer-events="none" />
    <path 
    parametric:d="M {scale * 29.49} {scale * 13.07} L {scale * 35.42} {scale * 13.07} L {scale * 35.42} {scale * 36.93} L {scale * 29.49} {scale * 36.93}" 
    fill="none" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 1}" 
    stroke-miterlimit="4" 
    pointer-events="none" />
`;



module.exports = {
    defaultString,
    dimensions,
    inset,
    lower,
    left
}