import React, { Component } from "react";
//import "./App.css";

class Contact extends Component {
  render() {
    const name = this.props.name;
    const pictureUrl = this.props.pictureUrl;
    const popularity = this.props.popularity;

    return (
      <div className="Contact">
        <img src={pictureUrl} alt="profile picture" />
        <p>{name}</p>
        <p>{popularity}</p>
      </div>
    );
  }
}

export default Contact;
