import React, { Component } from "react";
class Info extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.celeb.pictureUrl} alt="img" width="60px" />
        </td>
        <td>{this.props.celeb.name}</td>
        <td>{this.props.celeb.popularity}</td>
      </tr>
    );
  }
}
export default Info;
