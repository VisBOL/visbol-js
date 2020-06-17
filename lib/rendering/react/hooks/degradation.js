const dimensions = [45, 35];
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
    stroke="blue"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="m {scale * 3.4937173},{scale * 22.499997} {scale * 26.4830467},0" />
    <path 
    opacity="1"
    fill="blue"
    fill-opacity="1"
    stroke="blue"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="m {scale * 32.878941},{scale * 23.095614} {scale * -7.747004},{scale * -4.472735} {scale * 7.747004},{scale * -4.472735} z" 
    parametric:transform="matrix(0.5,0.8660254,-0.8660254,0.5,{scale * 28.030427},{scale * -13.049072})" />
    <circle 
    opacity="1"
    fill="none"
    fill-opacity="1"
    stroke="blue"
    parametric:stroke-width="{scale * 1}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:cx="{scale * 38.703384}" 
    parametric:cy="{scale * 22.499998}" 
    parametric:r="{scale * 4.7089591}" />
    <path
    opacity="1"
    fill="none"
    fill-opacity="1"
    stroke="blue"
    parametric:stroke-width="{scale * 0.99999964}"
    stroke-linecap="butt"
    stroke-linejoin="round"
    stroke-miterlimit="4"
    stroke-dasharray="none"
    stroke-dashoffset="0"
    stroke-opacity="1" 
    parametric:d="M {scale * 41.669486},{scale * 18.792371} {scale * 35.631351},{scale * 25.99576}" />`;


module.exports = {
    defaultString,
    dimensions,
    mult: 1,
}