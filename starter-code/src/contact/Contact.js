import React, { Component } from "react";
import "./Contact.css"

export default class Contact extends Component {
  render() {
    return (
      <tr className="contact">
        <td><img src={this.props.picture} alt={this.props.name}/></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button onClick={this.props.delete}>Delete</button></td>
      </tr>
    );
  }
}
