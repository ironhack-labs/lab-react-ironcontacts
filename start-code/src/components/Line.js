import React, { Component } from "react";

class Line extends Component {
  render() {
    return (
      <>
        <tr>
          <td>
            <img
              src={this.props.person.pictureUrl}
              style={{
                width: "25%"
              }}
              alt=""
            />
          </td>
          <td>{this.props.person.name}</td>
          <td>{this.props.person.popularity}</td>
          <td>
            <button onClick={() => this.props.deletePerson(this.props.index)}>
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  }
}
export default Line;
