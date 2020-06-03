const dimensions = [55, 45];
const lower = 12;
const inset = 0;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#" 
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:parametric="https://parametric-svg.github.io/v0.2"
    parametric:defaults="scale=1">
    <path 
    parametric:d="m {scale * 9.4999973},{scale * 32.499997} {scale * 25.9999997},0 0,{scale * -5} c 0,{scale * -10} {scale * -6},{scale * -15} {scale * -13},{scale * -15} {scale * -7},0 {scale * -12.9999997},{scale * 5} {scale * -12.9999997},{scale * 15} z"
    fill="#966fd6"
    stroke="#000000"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="round"
    stroke-linejoin="round" />
`;

module.exports = {
    defaultString,
    dimensions,
    inset,
    lower
}