import React, { Component } from "react";

export class ContactsTable extends Component {
  render() {
    const message = this.props.message;
    return (
      <tr>
        <td>
          <img width="200em" src={message.pictureUrl} alt="" />
        </td>
        <td>{message.name}</td>
        <td>{message.popularity.toFixed(2)}</td>
        <td>
          <button onClick={this.props.onChange}>delete</button>
        </td>
      </tr>
    );
  }
}

export default ContactsTable;
