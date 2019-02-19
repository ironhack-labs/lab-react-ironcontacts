import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      
        <tr>
          <td><img src={this.props.picture}></img></td>
          <td>{this.props.name}</td>
          <td>{Math.round(this.props.popularity)}</td>
        </tr>
      
    );
  }
}

export default Contact;
