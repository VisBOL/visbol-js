import React from 'react';

function Navigator(props) {
    return (
        <div className='navigator'>
            <p className='navigator-title'>VisBOL Navigator</p>
            <div className='size-adjustment'>
                <p className='instruction'>Zoom</p>
                <input 
                className='slider'
                type='range'
                min='0.5'
                max='7'
                step='0.5'
                value={props.size}
                onChange={e => {
                    props.setSize(e.target.value);
                }}
                />
            </div>
        </div>
    )
}

export default Navigator;