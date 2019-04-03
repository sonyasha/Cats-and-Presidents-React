import React from 'react';
import Preslist from '../components/PresList';
import PartiesList from '../components/PartiesList';

class Presapp extends React.Component {
    constructor() {
        super()
        this.state = {
            presidents: [],
            parties: ['All'],
            current_party: '',
        }
    }

    componentDidMount() {
        fetch('https://theunitedstates.io/congress-legislators/executive.json')
        .then(response => response.json())
        .then(data => data.reduce((tot, el) => {
                const pres_el = el.terms.filter(term => term.type === 'prez');
                if (pres_el.length) {
                    const terms = pres_el.map(term_type => {
                        if (term_type.party === 'Democratic' || term_type.party === 'Democrat') {
                            var party = 'Democrat'
                        }
                        else if (term_type.party === 'no party') {
                            party = 'No Party'
                        }
                        else {
                            party = term_type.party
                        };

                        return {start: term_type.start,
                                end: term_type.end,
                                party: party}
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
        .then(obj => {
            const parties = obj.reduce((tot, el) => tot.add(el.terms[0].party), new Set());
            this.setState({presidents: obj,
                            parties: this.state.parties.concat(Array.from(parties))});
        });
    }

    onButtonChange = event => {
        this.setState({current_party: event.target.value});
    }

    render() {
        const { presidents, parties, current_party } = this.state;
        const chosen_party = presidents.filter(el => el.terms[0].party === current_party);
        return !presidents.length ? 
                <h1>Loading</h1>:
        (
            <div className= 'tc'>
                <h1 className='f2 mid-gray'>Presidents</h1>
                <PartiesList parties = {parties} onButtonChange = {this.onButtonChange}/>
                {chosen_party.length ? (<Preslist presidents = {chosen_party}/>) :
                (<Preslist presidents = {presidents}/>)}
                
            </div>
        )
    }
};

export default Presapp;