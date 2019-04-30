import React, { Component } from "react";
import "./Contact.css";


export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <tr>
          <td><p><img src={this.props.pictureUrl} /></p></td>
          <td><p>{this.props.name}</p>
          </td>
          <td><p> {this.props.popularity}</p></td>
          <td><button onClick={this.props.delete}>Delete</button></td>
        </tr>
        
      </div>
    );
  }
}
