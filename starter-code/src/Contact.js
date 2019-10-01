import React, { Component } from "react";

export default class Contact extends Component {

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt={this.props.name + "image"} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button
              type="button"
              onClick={() => this.props.delete(this.props)}
            >
              Remove
            </button></td>
      </tr>
    );
  }
}
