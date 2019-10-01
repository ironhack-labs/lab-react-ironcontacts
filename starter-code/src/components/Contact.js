import React, { Component } from "./node_modules/react";

export default class Contact extends Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.pictureUrl} alt={this.props.name} className="contactImg" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
      </tr>
    );
  }
}
