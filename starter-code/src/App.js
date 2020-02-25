import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact";

let newContacts = [...contacts];
let shownContacts = newContacts.slice(0, 5);

class App extends Component {
  state = {
    shownContacts
  };

  addRandomContact() {
    let newState = {
      ...this.state
    };
    let random = Math.floor(Math.random() * (contacts.length - 0)) + 0;
    let newContact = contacts[random];

    newState.shownContacts.push(newContact);

    this.setState(newState);
  }

  sortByName() {
    let newState = {
      ...this.state
    };

    newState.shownContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState);
  }

  sortByPopularity() {
    let newState = {
      ...this.state
    };

    newState.shownContacts.sort((a, b) =>
      a.popularity-b.popularity
    );

    this.setState(newState);
  }

  deleteContact(contactID) {
    console.log(`Hi! I am the container of all products`);
    console.log(`I am gonna delete the id ${contactID}`);

    let newState = { ...this.state };
    let filteredContacts = newState.shownContacts.filter(contact => contact.id !== contactID);

    newState.shownContacts = filteredContacts;

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <nav>
          <button onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </nav>
        <table>
          <tr>
            <th>Picure</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.shownContacts.map(contact => (
            <Contact
            clickToDelete={() => this.deleteContact(contact.id)}
              key={contact.id}
              pictureUrl={contact.pictureUrl}
              popularity={contact.popularity}
              name={contact.name}
            ></Contact>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
