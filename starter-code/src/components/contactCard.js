import React, { Component } from "react";
import App from "../App";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img src={this.props.img} />
        <p>{this.props.name}</p>
        <p>{this.props.pop}</p>
        <button onClick={this.props.deleteContact}>delete</button>
      </div>
    );
  }
}

export default Contact;
