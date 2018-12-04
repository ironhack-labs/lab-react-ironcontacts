import React, { Component } from "react";
import contacts from "../../contacts.json";
import "./ListContacts.css";

export default class ListContacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContact = () => {
    let randomContact = contacts[parseInt(Math.random() * Object.keys(contacts).length)]
     this.setState({...this.state, contact: this.state.contacts.push(randomContact)});
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody />

          {this.state.contacts.map((contact,i) => (
            <tr key={i}>
              <td>
                <img
                  className="image-contact"
                  src={contact.pictureUrl}
                  alt=""
                />
              </td>
              <td>{contact.name}</td>
              <td>{parseFloat(contact.popularity).toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
