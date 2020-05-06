import React, { Component } from "react";

export default class Row extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="" />
        </td>
        <td>
          <h3>{this.props.name}</h3>
        </td>
        <td>
          <h3>{this.props.popularity}</h3>
        </td>
        <td>
          <button onClick={this.props.rem}>Delete</button>
        </td>
      </tr>
    );
  }
}
