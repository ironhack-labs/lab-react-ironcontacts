import React, { Component } from "react";
// this is the child and the one on the app is the parent

class Info extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.celebrity.pictureUrl} alt="img" width="60px" />
        </td>
        <td>{this.props.celebrity.name}</td>
        <td>{this.props.celebrity.popularity}</td>
        <td>
          <button onClick={this.props.delete}> Delete </button>
        </td>
      </tr>
    );
  }
}
export default Info;
