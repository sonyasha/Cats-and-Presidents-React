import React from 'react';

class PresSearch extends React.Component {
    render() {
        return (
            <div>
                <input type='search' onChange={this.props.onSearch}/>
            </div>
        )
    }
};

export default PresSearch;