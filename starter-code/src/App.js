import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Component/Contact";
let fiveContacts = contacts.slice(0, 5);

class App extends Component {
  state = {
    contactsState: fiveContacts,
  };

  addContact = () => {
    const random = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[random];
    if (
      this.state.contactsState.find(
        (contact) => contact.id === randomContact.id
      )
    ) {
      this.addContact();
      return;
    }
    this.setState({
      contactsState: this.state.contactsState.concat(randomContact),
    });
  };

  sortByName = () => {
    const contactsState = [...this.state.contactsState];
    const sortName = contactsState.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contactsState: sortName,
    });
  };

  sortByPopularity = () => {
    const contactsState = [...this.state.contactsState];
    const sortPopularity = contactsState.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      contactsState: sortPopularity,
    });
  };

  removeContact = (index) => {
    const contactsState = [...this.state.contactsState];
    const removeContact = contactsState.splice(index, 1);
    console.log(contactsState);
    this.setState({
      contactsState: contactsState,
    });
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By name</button>
        <button onClick={this.sortByPopularity}>Sort By popularity</button>
        <div className="flex-heading">
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
        </div>
        <Contact
          contactsState={this.state.contactsState}
          removeContact={this.removeContact}
        />
      </Fragment>
    );
  }
}

export default App;
