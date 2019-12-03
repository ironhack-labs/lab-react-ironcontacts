import React, { Component } from "react";

import "./style.css";

class People extends Component {
  // constructor() {
  //   super();
  // }

  // deletePerson(value) {
  //   console.log(value);
  // }

  render() {
    // console.log(this.props);
    const name = this.props.children.name;
    const pictureUrl = this.props.children.pictureUrl;
    const popularity = this.props.children.popularity;
    const id = this.props.children.id;
    return (
      <tr>
        <td>{name}</td>
        <td>
          <img
            className="rounded mx-auto d-block profile-pic"
            src={pictureUrl}
            alt=""
          />
        </td>
        <td>{popularity}</td>
        <td>
          <button onClick={() => this.props.delete(id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default People;
