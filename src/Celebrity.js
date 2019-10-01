import React, { Component } from "react";
import contacts from "./contacts.json";

const sortLookup = {
  name: (a, b) => a.name.localeCompare(b.name),
  popularity: (a, b) => b.popularity - a.popularity,
  "name-dsc": false,
  "popularity-dsc": false
};

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContacts: contacts.slice(0, 5)
    };
  }

  createRow = () => {
    return this.state.activeContacts.map((contact, i) => (
      <Contact
        key={i}
        remove={() => this.deleteByID(i)}
        contact={contact}
      ></Contact>
    ));
  };

  deleteByID = contactIndex => {
    let contactsCopy = [...this.state.activeContacts];
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      activeContacts: contactsCopy
    });
  };

  addRandom = () => {
    // console.log(contacts);
    let i = ~~(Math.random() * contacts.length);
    let newContact = contacts[i];
    let addedContacts = this.state.activeContacts;
    addedContacts.push(newContact);
    // console.log(this.state.activeContacts);
    this.setState({
      activeContacts: addedContacts
    });
  };

  render() {
    return <div></div>;
  }
}

export default Celebrity;
