import React, { Component } from "react";
import "./IronContacts.css";

export default class IronContacts extends Component {
  render() {
    const { pictureUrl, name, popularity } = this.props;

    return (
      // <div className="table-cantainer">
      <tr>
        <td>
          <img src={pictureUrl} alt="picture url"></img>
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td>
          <button onClick="">Delete</button>
        </td>
      </tr>
    );
  }
}
