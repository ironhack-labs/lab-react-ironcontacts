import React, { Component } from "react";

class PersonList extends Component {
  render() {
    return (
      <tr>
        <td>
          <img height="100px" src={this.props.photoUrl} alt={this.props.name} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => this.props.deleteCharacter(this.props.index)}>
            <span role="img" aria-label="borrar">
              🚽
            </span>
          </button>
        </td>
      </tr>
    );
  }
}

export default PersonList;
