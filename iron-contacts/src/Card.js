import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            className="card-img"
            src={this.props.pictureUrl}
            alt={this.props.name}
          ></img>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
        <td>
          <button class="card-btn" onClick={this.props.clickDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Card;
