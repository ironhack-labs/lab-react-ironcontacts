import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="" />
        </td>
        <td>
          <p>{this.props.name}</p>
        </td>
        <td>
          <p>{this.props.popularity}</p>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}
