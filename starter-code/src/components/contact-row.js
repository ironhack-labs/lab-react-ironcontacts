import React, { Component } from "react";

class ContactRow extends Component {

  render() {
      return (
          <div  className="contact-row"> 
              <img src={this.props.pictureUrl} alt="" width="150px"/>
              <div>{this.props.name}</div>
              <div>{this.props.popularity.toFixed(2)}</div>
              <button onClick={this.props.deleteHandler}>Delete</button>
          </div>
      )
  }
}

export default ContactRow;
