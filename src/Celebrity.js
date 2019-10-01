import React, { Component } from "react";
import contacts from "./contacts.json";
import Contact from "./Contact";

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

  sortContacts = sortMethod => {
    let descending = sortLookup[sortMethod + "-dsc"];
    let sorted = [...this.state.activeContacts].sort(sortLookup[sortMethod]);
    if (descending) sorted.reverse();
    sortLookup[sortMethod + "-dsc"] = !descending;

    this.setState({
      activeContacts: sorted
    });
  };

  render() {
    return <tbody>{this.createRow()}</tbody>;
  }
}

export default Celebrity;
