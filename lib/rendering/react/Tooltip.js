const React = require('react');

function Tooltip(props) {
    if (props.showTooltip) {
        const style = {
            top: 0,
            left: 0,
            zIndex: '10000',
            position: 'absolute',
            backgroundColor: 'black',
            borderRadius: '10px',
            opacity: '0.9',
        }
        return (
            <div style={style}>
                <p id='visbol-tooltip-text'>{props.tooltip}</p>
            </div>
        );
    }
    return null;
}

module.exports = Tooltip;