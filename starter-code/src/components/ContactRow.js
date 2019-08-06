import React, { Component } from 'react';
import './ContactRow.css';

class ContactRow extends Component {
  render() {
    return (
      <tr className="ContactRow">
          <td> <img src={this.props.pictureUrl} alt={this.props.name}></img> </td>
          <td>{this.props.name}</td> 
          <td>{this.props.popularity.toFixed(1)}</td>
          <td> <button onClick={() => {this.props.removeContact(this.props.index)} } >Remove</button> </td>
      </tr>
    );
  }
}

export default ContactRow;