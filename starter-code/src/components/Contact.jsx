import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} />
        </td>
        <td>
          <p>{this.props.name}</p>
        </td>
        <td>
          <p>{this.props.popularity}</p>
        </td>
      </tr>
    );
  }
}
