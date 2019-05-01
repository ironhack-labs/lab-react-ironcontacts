import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
      <tr>
          <td>
        <p><img src={this.props.pictureUrl}/></p>
        </td>

        <td>
        <p>{this.props.name}</p>
        </td>
        <td>
        <p> {this.props.popularity}</p>
        </td>
        </tr>
        <button onClick={this.props.delete}>Delete </button>

      </div>
    )
  }
}
