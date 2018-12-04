import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <tr>
       <td> <img  src={this.props.pictureUrl} alt=""/> </td>
       <td>{this.props.name}</td>
       <td>{this.props.popularity}</td>
      </tr>
    );
  }
}
