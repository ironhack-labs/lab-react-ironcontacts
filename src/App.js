import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Header from "./Header";
import Contact from "./Contact";
import Table from "./Table";

const sortLookup = {
  name            : (a, b) => a.name.localeCompare(b.name),
  popularity      : (a, b) => b.popularity - a.popularity,
  "name-dsc"      : false,
  "popularity-dsc": false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContacts: contacts.splice(0, 5),
      allContacts   : contacts
    };
  }

  createRow = () => {
    return this.state.activeContacts.map((contact, i) => (
      <Contact
        key     = {i}
        remove  = {() => this.deleteByID(i)}
        contact = {contact}
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
    let i             = ~~(Math.random() * this.state.allContacts.length);
    let newContact    = this.state.allContacts[i];
    let addedContacts = this.state.activeContacts;
    addedContacts.push(newContact);
    let contactsCopy = [...this.state.allContacts];
    contactsCopy.splice(i, 1);
    this.setState({
      activeContacts: addedContacts,
      allContacts   : contactsCopy
    });
  };

  sortContacts = sortMethod => {
    let descending = sortLookup[sortMethod + "-dsc"];
    let sorted     = [...this.state.activeContacts].sort(sortLookup[sortMethod]);
    if (descending) sorted.reverse();
    sortLookup[sortMethod + "-dsc"] = !descending;

    this.setState({
      activeContacts: sorted
    });
  };

  render() {
    console.log(this);
    return (
      <div className = "App">
        <div>
          <Header
            add      = {() => this.addRandom()}
            nameSort = {() => this.sortContacts("name")}
            popSort  = {() => this.sortContacts("popularity")}
          />
          <Table body = {this.createRow()}></Table>
        </div>
      </div>
    );
  }
}

export default App;
