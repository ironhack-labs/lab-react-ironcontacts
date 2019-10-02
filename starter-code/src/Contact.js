
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
          <tr>
            <td>
              <img className="contact-pic"
                src={this.props.pictureUrl}
                alt={this.props.name + "profile picture"}
              />
            </td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity.toFixed(2)}</td>
            <td>
              <button onClick={this.props.onClick}>
                Delete
              </button>
            </td>
          </tr>
        );
  }
}
