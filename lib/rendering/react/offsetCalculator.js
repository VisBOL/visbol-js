function xTranslation(props) {
    return props.coords[0];
}

function yTranslation(props, inset) {
    if (!inset) {
        inset = 0;
    }
    return (props.height - props.coords[1] - props.dimensions[1]) - props.largestInset + inset;
}

module.exports = {
    xTranslation,
    yTranslation
}