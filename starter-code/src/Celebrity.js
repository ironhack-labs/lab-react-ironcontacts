import React from "react";
import "./Celebrity.css";

export default class Celebrity extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} width="70"/>
        </td>
        <td width="50">{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
        <td>{this.props.id}</td>
        <td>
          <button className="tlacidlo" onClick={() => this.props.clickToDelete()}>Delete</button>
        </td>
      </tr>
    );
  }
}
