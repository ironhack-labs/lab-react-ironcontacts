import React, { Component } from "react";

// import "./Table.css";

class Actor extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} width="100" height="100" alt="" />
        </td>
        <td>
          <span>{this.props.name}</span>
        </td>
        <td>
          <span>{this.props.popularity}</span>
        </td>
      </tr>
    );
  }
}

export default Actor;
