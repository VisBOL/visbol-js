const dimensions = [65, 45];
const inset = -27;
const lower = 25;
const left = -10;
const defaultString = `
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
   xmlns:cc="http://creativecommons.org/ns#" 
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
   xmlns:svg="http://www.w3.org/2000/svg" 
   xmlns="http://www.w3.org/2000/svg">
   xmlns:parametric="https://parametric-svg.github.io/v0.2"
   parametric:defaults="scale=1">
   <g transform="matrix(0.77148661,0,0,0.77148661,-1.6350431,-1.6880776)">
   <path 
   parametric:d="m {scale * 82.316714},{scale * 53.499993} c {scale * -8.999994},{scale * -15.999994} {scale * -10},{scale * -12.500001} {scale * -15},{scale * -5.500001} {scale * -5},{scale * 7} {scale * -6.25},{scale * 7.2049998} {scale * -11.01},{scale * 1e-6} {scale * -4.75},{scale * -7.249997} {scale * -7.249998},{scale * -6.749999} {scale * -11.749999},0 {scale * -4.500001},{scale * 6.749999} {scale * -5.749999},{scale * 8.250003} {scale * -11.500001},{scale * 0.500001} {scale * -5.750002},{scale * -7.750002} {scale * -8.750005},{scale * -8.249989} {scale * -12.75},{scale * -0.25} l {scale * -0.125382},{scale * 12.9365} {scale * 62.010474},{scale * -0.165225} 0,{scale * -7.930822}" 
   fill="#ababab" 
   stroke-opacity="null"
   stroke="#000000"
   parametric:stroke-width="{scale * 1}" />
   </g>
`;

module.exports = {
    defaultString,
    dimensions,
    inset,
    lower,
    left
}