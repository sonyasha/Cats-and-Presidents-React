import React from 'react';
import Preslist from '../components/PresList';

class Presapp extends React.Component {
    constructor() {
        super()
        this.state = {
            presidents: [],
            
        }
    }

    componentDidMount() {
        fetch('https://theunitedstates.io/congress-legislators/executive.json')
        .then(response => response.json())
        .then(data => data.reduce((tot, el) => {
                const pres_el = el.terms.filter(term => term.type === 'prez');
                if (pres_el.length) {
                    const terms = pres_el.map(term_type => {
                        return {start: term_type.start,
                                end: term_type.end,
                                party: term_type.party}
                        });
                    tot.push({
                        firstname: el.name.first,
                        lastname: el.name.last,
                        terms: terms,
                        key: el.id.govtrack,
                    });
                }
                return tot;
            },[]))
        .then(obj => this.setState({presidents: obj}));
    }

    render() {
        const { presidents } = this.state;
        return (
            <div>
                <Preslist presidents = {presidents}/>
            </div>
        )
    }
};

export default Presapp;