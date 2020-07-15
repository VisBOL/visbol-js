/**
 * Formats the string to make the svg quicker
 * @param {String} string 
 */
function formatSVG(string) {
    var header = ``;
    string = string.replace(/:/g, "=\"");
    string = string.replace(/;/g, "\"\n");
    console.log(header + string);
}

formatSVG(`
fill:rgb(255,255,255);fill-rule:nonzero;stroke:none"

fill:none;stroke:black;stroke-width:1pt;stroke-linejoin:round;stroke-linecap:round"
`);