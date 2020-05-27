function xTranslation(props) {
    return props.coords[0] * props.size + props.padding;
}

function yTranslation(props) {
    return (props.height - props.coords[1] - props.dimensions[1]) * props.size - props.padding - props.inset;
}

module.exports = {
    xTranslation,
    yTranslation
}