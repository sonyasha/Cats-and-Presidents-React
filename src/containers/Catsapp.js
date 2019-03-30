import React from 'react';
import Profile from '../components/Profile';
import './app.css';

class Catsapp extends React.Component {
    render() {
        return (
            <div className= 'tc flex flex-column center bg-light-gray'>
                <h1>
                    Cats breeds
                </h1>
                <Profile/>
            </div>
        )
    }
};

export default Catsapp;