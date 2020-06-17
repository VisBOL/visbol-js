const dimensions = [45, 45];
const inset = 12;
const lower = 10;
const left = -5;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <circle 
    parametric:cx="{scale * 22.499998}" 
    parametric:cy="{scale * 22.499998}" 
    parametric:r="{scale * 12}"
    fill="#cceeee"
    stroke="#000000"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="round"
    stroke-linejoin="round" />
`;



module.exports = {
    defaultString,
    dimensions,
    inset,
    lower,
    left
}