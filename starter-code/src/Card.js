import React, {Component} from 'react'

export default class Card extends Component {
    render(){
        return (
            <div className='card'>
                <img className='celeb-image' src={this.props.image_url} alt="Celebrity Image" />
                <h3>{this.props.name}</h3>
                <h3>Rating: {this.props.rating}</h3>
            </div>
        )
    }
}
