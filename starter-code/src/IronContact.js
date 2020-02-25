import React from "react";
import "./IronContact.css"
export default class IronContacts extends React.Component {
  render() {
  
    return (
      <tr>
        <td> <img width="100"src={this.props.pictureUrl} alt="imagen"></img></td>
        <td> {this.props.name} </td>
        <td> {this.props.popularity}</td>
        <td><button class="button is-black" onClick={() => this.props.clickToDelete()}>Delete me</button></td>
      </tr>
    );
  }
}