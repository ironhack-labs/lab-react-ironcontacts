import React, { Component } from "react";

export default class ContactList extends Component {
  render() {
    return (
      
        <tr className="contacts-table">
          <td>
            <img
              src={this.props.picture}
              alt=""
              style={{ height: 100, with: 100 }}
            />
          </td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
        </tr>
    );
  }
}
