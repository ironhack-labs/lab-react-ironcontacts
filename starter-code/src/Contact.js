import React from "react";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
        <tr className="card">
            <td><img src={this.props.pictureUrl} alt={this.props.name}/></td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity}</td>
            <td><button onClick={() => this.props.clickToDelete()}>Delete</button></td>
        </tr>
    );
  }
}