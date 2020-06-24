const React = require('react');

const textLength = require('./config').text_length;
const textSize = require('./config').text_size;
const font = require('./config').font;

function truncateName(name, length) {
    if(name.length <= length) {
        return name;
    }
    var truncated = '';
    for(let i = 0; i < length - 3; i += 1) {
        truncated += name.charAt(i);
    }
    for(let i = 0; i < 3; i += 1) {
        truncated += '.';
    }
    return truncated;
}

function Label(props) {
    return (
        <text 
        fontFamily={font} 
        fontSize={`${textSize}px`} 
        y={props.move}
        x={5}>
            {truncateName(props.name, textLength)}
        </text>
    )
}

module.exports = Label;