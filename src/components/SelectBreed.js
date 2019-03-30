import React from 'react';

class SelectBreed extends React.Component {
    render() {
        const breeds = this.props.breeds;
        const options = Object.keys(breeds).map(key => 
            <option value={key} key={breeds[key]}>{breeds[key]}</option>
        )
        return (
            <div>
                <select className='pa2 ma2'>
                    {options}
                </select>
            </div>
        )
    }
};


export default SelectBreed;