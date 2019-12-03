import React, { Component } from "react";
import "./celebrity.css";

export default class Celebrity extends Component {

  render() {
    return (
      <tr>
        <td className="imageContainer">
          <img src={this.props.image} className="celebrityImage" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>
          <button onClick = {this.props.delete}type="button">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
