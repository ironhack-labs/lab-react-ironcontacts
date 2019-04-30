import React, { Component } from 'react';
import "./Contact.css"

class Contact extends Component {
  render() {
    return (
        <div className="Contact">
          <div className="contactDetail">
            <div id="left"><img src={this.props.pictureUrl} ></img></div>
            <div id="center"><p>{this.props.name}</p></div>
            <div id="right"><p>{this.props.popularity}</p></div>
            <div id="action"><button>Delete</button></div>
          </div>
        </div>
    )
  }
}

export default Contact;
