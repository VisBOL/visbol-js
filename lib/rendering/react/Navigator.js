const React = require('react');

function Navigator(props) {
    return (
        <div className='navigator'>
            <p className='navigator-title'>Visbol Navigator</p>
            <div className='size-adjustment'>
                <p className='instruction'>Adjust Size</p>
                <input 
                className='slider'
                type='range'
                min='0.5'
                max='5'
                step='0.1'
                value={props.size}
                onChange={e => {
                    props.setSize(e.target.value);
                }}
                />
            </div>
        </div>
    )
}

module.exports = Navigator;