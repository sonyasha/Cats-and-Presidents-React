import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className='fl w-80 pa2 tc ma2 center'>
                <img src='https://cdn2.thecatapi.com/images/yZE2JpeXz.jpg' alt='a cat'/>
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