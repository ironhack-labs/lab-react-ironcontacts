import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const contactsMap = this.props.contactsState.map((contact, i) => (
      <div className="contact-details" key={contact._id}>
        <img src={contact.pictureUrl} style={{ width: "200px" }} alt="" />
        <h3>{contact.name}</h3>
        <p>{contact.popularity}</p>
        <button onClick={() => this.props.removeContact(i)}>Delete</button>
      </div>
    ));
    return contactsMap;
  }
}
