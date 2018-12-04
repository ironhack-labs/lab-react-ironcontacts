import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr className="classContainer">
       <td> <img className="imgStyle" src={this.props.pictureUrl} alt=""/> </td>
       <td>{this.props.name}</td>
       <td>{this.props.popularity}</td>
      </tr>
    );
  }
}
