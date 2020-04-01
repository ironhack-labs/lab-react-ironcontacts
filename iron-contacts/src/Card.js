import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            className="celebrity-img"
            src={this.props.pictureUrl}
            alt={this.props.name}
          ></img>
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.rating}</td>
        <td>
          <button onClick={this.props.clickDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Card;
