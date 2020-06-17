const dimensions = [35, 45];
const lower = 0;
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
    opacity="1"
    fill="#f1948a"
    fill-opacity="1"
    stroke="#000000"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="butt"
    stroke-linejoin="miter"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="m {scale * 22.91113},{scale * 11.713864} a {scale * 9.5129835},{scale * 9.5129835} 0 0 0 {scale * -9.513671},{scale * 9.513672} {scale * 9.5129835},{scale * 9.5129835} 0 0 0 {scale * 1.5625},{scale * 5.210937} {scale * 3.5205528},{scale * 3.5205528} 0 0 0 {scale * -2.384766},{scale * 3.328126} {scale * 3.5205528},{scale * 3.5205528} 0 0 0 {scale * 3.519531},{scale * 3.519531} {scale * 3.5205528},{scale * 3.5205528} 0 0 0 {scale * 3.501953},{scale * -3.154297} {scale * 9.5129835},{scale * 9.5129835} 0 0 0 {scale * 3.314453},{scale * 0.607422} {scale * 9.5129835},{scale * 9.5129835} 0 0 0 {scale * 9.513672},{scale * -9.511719} {scale * 9.5129835},{scale * 9.5129835} 0 0 0 {scale * -9.513672},{scale * -9.513672} z" />
`;


module.exports = {
    defaultString,
    dimensions,
    inset,
    lower
}