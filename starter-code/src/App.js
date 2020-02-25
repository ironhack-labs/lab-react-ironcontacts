import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./Components/Contacts";

let fiveArr = contacts.slice(0, 5);

class App extends Component {
  state = {
    contacts: fiveArr
  };

  addContact() {
    let availableContacts = contacts.filter(
      contact => !this.state.contacts.includes(contact)
    );
    console.log(availableContacts);
    let newState = {
      ...this.state
    };

    if (availableContacts.length > 0) {
      let newContact =
        availableContacts[Math.floor(Math.random() * availableContacts.length)];
      newState.contacts.push(newContact);
    } else {
      alert("No more contacts available");
    }

    this.setState(newState);
  }

  sortContactByName() {
    let newState = {
      ...this.state
    };
    newState.contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState(newState);
  }

  sortContactsByPopularity() {
    let newState = {
      ...this.state
    };
    newState.contacts.sort((a, b) => b.popularity - a.popularity);
    this.setState(newState);
  }
  deleteContact(contactID) {
    let newState = {
      ...this.state
    };
    let filteredContacts = newState.contacts.filter(
      contact => contact.id !== contactID
    );
    newState.contacts = filteredContacts;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <nav>
          <button onClick={() => this.addContact()}>Add Contact</button>
          <button onClick={() => this.sortContactByName()}>Sort by Name</button>
          <button onClick={() => this.sortContactsByPopularity()}>
            by Popularity
          </button>
        </nav>
        <table>
          <thead>
            <tr>
              <th colSpan="3">IronContacts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
            {this.state.contacts.map((contact, idx) => (
              <Contacts
                clickToDelete={() => this.deleteContact(contact.id)}
                key={contact.id}
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
              ></Contacts>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
