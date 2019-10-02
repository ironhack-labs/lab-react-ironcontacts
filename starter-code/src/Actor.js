import React, { Component } from "react";

export default class Actor extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="" />
        </td>
        <td>
          <h2>{this.props.name}</h2>
        </td>
        <td>
          <h2>{this.props.popularity}</h2>
        </td>
        <td>
          <button onClick={() => this.props.delete(this.props)}>Delete</button>
        </td>
      </tr>
    );
  }
}
