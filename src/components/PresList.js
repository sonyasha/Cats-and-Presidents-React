import React from 'react';
import Presprofile from './PresProfile';

class Preslist extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                {this.props.presidents.map(el =>
                (<Presprofile firstname = {el.firstname}
                                lastname = {el.lastname}
                                terms = {el.terms}
                                key = {el.key}/>)
                                )}
            </div>
        )
    }
}

export default Preslist;