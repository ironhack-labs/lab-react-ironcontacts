import React, { Component } from "react";
import contacts from "../contacts.json";
import "./card.css"
class Card extends Component {
  constructor() {
    super();
    this.state = { contacts: this.fiveFirstContacts() };
  }
  fiveFirstContacts = () => {
    const contactsArr = [];
    const numberContacts = 5;
    for (var i = 0; i < numberContacts; i++) {
      contactsArr.push(contacts[i]);
    }
    return contactsArr;
  };
  render() {
    const tableFields = this.state.contacts.map((contact, index) => (
        <tbody>
        <th key={index}><img src={contact.pictureUrl}></img></th>
        <th key={index}><h1>{contact.name}</h1></th>
        <th key={index}><h1>{contact.popularity}</h1></th>
        </tbody>
    ));
    
    return (
      <div className="card">
        <table>
          {tableFields}
        </table>
      </div>
    );
  }
}
export default Card;
