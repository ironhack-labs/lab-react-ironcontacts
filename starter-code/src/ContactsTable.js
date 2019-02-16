import React, { Component } from "react";
import contacts from "./contacts.json";
import ContactRow from "./ContactRow";

class ContactsTable extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }

  addRandomContact() {
    let newContact;
    let newContacts = this.state.contacts;
    do  {
      newContact = contacts[Math.floor(Math.random() * contacts.length)];
    } while (newContacts.includes(newContact) && newContacts.length<contacts.length)
    // console.log(this.state)
    newContacts.push(newContact);
    this.setState({contacts: newContacts});
    console.log(this.state);
  }

  sortByName() {
    let newContacts = this.state.contacts;
    newContacts.sort((a,b) => {return a.name.localeCompare(b.name)});
    this.setState({contacts: newContacts});
  }

  sortByPopularity() {
    let newContacts = this.state.contacts;
    newContacts.sort((a,b) => {return b.popularity-a.popularity});
    this.setState({contacts: newContacts});
  }

  deleteContact = (index) => {
    let newContacts = this.state.contacts;
    newContacts.splice(index,1);
    this.setState({contacts: newContacts});
  }

  render() {
    // const contactItems=this.state;
    const items = this.state.contacts.map((el, idx) => {
      return <ContactRow key={idx} {...el} clickToDelete={() => {this.deleteContact(idx)}}  />;
    });

    return (
      <div>
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <table id="contacts">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {items}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactsTable;
