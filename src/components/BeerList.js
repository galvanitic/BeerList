import React from 'react';
import BeerItem from './BeerItem';

import '../style/beerList.css'

class BeerList extends React.Component {
    state = {
        beers: []
    }
    fetchBeers = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(res => this.setState({beers: res}));
    }
    render() {
        return(
            <div>
                <button className='list' onClick={this.fetchBeers}> List Some Beers</button>
                <ul>
                    {console.log(this.state.beers)}
                    {this.state.beers.map((beer) => <BeerItem beerInfo={beer} key={beer.id}/>)}
                </ul>
            </div>
        )
    }
}

export default BeerList;