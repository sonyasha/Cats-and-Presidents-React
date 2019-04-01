import React from 'react';

class SelectBreed extends React.Component {
    render() {
        const breeds = this.props.breeds;
        
        const options = Object.keys(breeds).map(key => 
            <option value={key} key={breeds[key]}>{key}</option>
        )
        return (
            <div className='pa1'>
                <select className='bg-washed-blue' onChange={this.props.onChange}>
                    {options}
                </select>
            </div>
        )
    }
};


export default SelectBreed;