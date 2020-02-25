import React from "react";
// import App from "./App"

export default class Contact extends React.Component {
  render() {
    return (
      <tr className="Contact">
        <td><img width="100" src={this.props.pictureUrl} alt="" /></td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td><button onClick={() => this.props.deleteContact()}>Delete Contact</button></td>
      </tr>
    );
  }
}
