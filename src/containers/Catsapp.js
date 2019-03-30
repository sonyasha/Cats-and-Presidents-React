import React from 'react';
import Profile from '../components/Profile';
import SelectBreed from '../components/SelectBreed';
import './app.css';


class Catsapp extends React.Component {
    

    constructor() {
        super();
        this.state = {
            breeds: {},
            selectbreed: '',
        }
    };
   
    componentDidMount() {

        //check the status of response
        const checkStatus = (response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        };

        fetch(('https://api.thecatapi.com/v1/breeds'), {
            headers: {"x-api-key": process.env.REACT_APP_CATS_API_KEY}
            })
            .then(checkStatus)
            .then(response => response.json())
            // .then(data => data.map(el =>
            //     this.setState({breeds: Object.assign( {},
            //         this.state.breeds, { [el.name] : el.id })})
            // ));
            .then(data => data.reduce((tot,el) => {
                tot[el.name] = el.id;
                return tot;
            }, {}))
            .then(obj => this.setState({breeds: obj}));
    };
    
    render() {
        const { breeds, selectbreed } = this.state;

        return !Object.keys(breeds).length ?
            <h1>LOADING</h1> :
            (
                <div className= 'tc flex flex-column center'>
                    <h1>
                        Cats breeds
                    </h1>
                    <SelectBreed breeds = {breeds}/>
                    <Profile/>
                </div>
            )
    }
};

export default Catsapp;