import React from 'react';
import Background from './dark-paths.png';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '75vh', backgroundImage: `url(${Background})`}} className='pa1'>
            {props.children}
        </div>
    )
};

export default Scroll;