import React, { Component } from "react";

export default class Table extends Component {
  render() {
    return (
      <tr className = "rows-line">
        <td >< img className = "pic" src = {this.props.image} ></img></td>
        <td className = "actorname"> {this.props.name} </td>
        <td className = "popular">{this.props.popularity}</td>
        <td>{this.props.delete}<button>Delete</button></td>
      </tr>
    );
  }
}