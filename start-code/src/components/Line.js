import React, { Component } from "react";

class Line extends Component {
  render() {
    return (
      <tr>
        <td colSpan={1}>
          <img src={this.props.person.pictureUrl} alt="" />
        </td>
        <td>{this.props.person.name}</td>
        <td>{this.props.person.popularity}</td>
        <td>
          <button onClick={() => this.props.deletePerson(this.props.index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Line;
