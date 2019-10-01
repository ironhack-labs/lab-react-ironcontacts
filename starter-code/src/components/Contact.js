import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const pictureUrl = this.props.pictureUrl;
    const name = this.props.name;
    const popularity = this.props.popularity;
    return (
      <tr>
        <td><img src={pictureUrl} alt={name} className="contactImg" /></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={() => this.props.remove(name)}>Delete</button></td>
      </tr>
    );
  }
}