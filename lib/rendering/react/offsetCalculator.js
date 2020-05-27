function xTranslation(props) {
    return props.coords[0] * props.size + props.padding;
}

function yTranslation(props, inset) {
    if (!inset) {
        inset = 0;
    }
    return (props.height - props.coords[1] - props.dimensions[1]) * props.size + props.padding - props.inset + (inset * props.size);
}

module.exports = {
    xTranslation,
    yTranslation
}