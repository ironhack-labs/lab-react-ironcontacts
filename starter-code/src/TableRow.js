import React, { Component } from "react";
import contacts from "./contacts.json";

export default class TableRow extends Component {
  render() {
    return (
      <tr>
        <td className="photo">
          <img src={this.props.photo} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>{this.props.button}</td>
      </tr>
    );
  }
}
