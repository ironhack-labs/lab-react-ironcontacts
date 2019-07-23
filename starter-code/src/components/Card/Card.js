import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render(props) {
    return (
      <div className="Card">
        <p>{this.props.Name}</p>
        <img src={this.props.Picture} />
        <p>Popularity: {this.props.Popularity}</p>
        <button onClick={this.props.Delete}>DELETE</button>
      </div>
    );
  }
}

export default Card;