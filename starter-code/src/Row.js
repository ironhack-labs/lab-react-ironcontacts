import React, { Component } from "react";
import "./css/Row.css";

export default class Row extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td><img src={this.props.pictureUrl} alt="" width="50px"/></td>
          <td className="name">{this.props.name}</td>
          <td>{this.props.popularity}</td>
          <td><button onClick={this.props.func}>Delete</button></td>
        </tr>
      </React.Fragment>
    );
  }
}
