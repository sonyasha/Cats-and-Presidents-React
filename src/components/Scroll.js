import React from 'react';
import Background from './backgrounds/random_grey_variations.png';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '75vh', backgroundImage: `url(${Background})`}} className='pa2 ma2'>
            {props.children}
        </div>
    )
};

export default Scroll;