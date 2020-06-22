const dimensions = [45, 45];
const inset = 10;
const lower = 9;
const left = -8;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <ellipse 
    parametric:cx="{scale * 24}" 
    parametric:cy="{scale * 26}" 
    parametric:rx="{scale * 11.489850631941787}" 
    parametric:ry="{scale * 11.489850631941787}" 
    fill="#cceeee" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 1}" 
    pointer-events="none" />
    <path 
    parametric:d="M {scale * 24.14} {scale * 25.99} L {scale * 37.5} {scale * 12.63}" 
    fill="#000000" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 2.68}" 
    stroke-linejoin="round" 
    stroke-linecap="round" 
    stroke-miterlimit="4" 
    pointer-events="none" />
    <path 
    parametric:d="M {scale * 38.13} {scale * 12.1} L {scale * 38.13} {scale * 15.23}" 
    fill="#000000" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 1.56}" 
    stroke-linejoin="round" 
    stroke-linecap="round" 
    stroke-miterlimit="4" 
    pointer-events="none" />
    <path 
    parametric:d="M {scale * 35} {scale * 12.1} L {scale * 38.13} {scale * 12.1}" 
    fill="#000000" 
    stroke="#000000" 
    parametric:stroke-width="{scale * 1.56}" 
    stroke-linejoin="round" 
    stroke-linecap="round" 
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