import React from 'react';
import Background from './backgrounds/fabric_of_squares_gray_@2X.png'

class Profile extends React.Component {
    render() {
        return (
            <div className='fl w-80 pa2 tc ma2 center br2 bg-light-gray' style={{backgroundImage: `url(${Background})`}}>
                <img className='br2' src='https://cdn2.thecatapi.com/images/yZE2JpeXz.jpg' alt='a cat'/>
                <div>
                    <h3>
                        Breed
                    </h3>
                    <p>
                        Description
                    </p>
                </div>
            </div>
        )
    }


};

export default Profile;