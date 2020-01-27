import React from 'react';
import '../style/beerItem.css';

class BeerItem extends React.Component {
    state = {
        liked: true,
        likedClass: ''
    }

    like = () => {
        this.setState({liked: !this.state.liked, likedClass: this.state.liked ? 'liked' : ''});
    }
    render(){
        return(
            <li className='beerItem'>
                <h1>{this.props.beerInfo.name}</h1>
                <div className='beerInfo'>
                    <div className='beerImg'>
                        <img src={this.props.beerInfo.image_url}></img>
                    </div>
                    <div className='beerDetails'>
                        <p>{this.props.beerInfo.description}</p>
                        <button className={this.state.likedClass} onClick={this.like}>Like</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default BeerItem;