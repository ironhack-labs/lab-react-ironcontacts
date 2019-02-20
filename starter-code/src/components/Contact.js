import React, { Component } from "react";
import "./Contact.css";
import contacts from "./contacts.json";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="Contact">
        <h2>Contact</h2>
      </section>
    );
  }
}

export default Contact;
