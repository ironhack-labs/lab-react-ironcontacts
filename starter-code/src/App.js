import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./contact.js";

let reduceContacts = [...contacts];
let arrContacts = reduceContacts.slice(0, 5);

class App extends Component {
  constructor() {
    super();
    this.state = { arrContacts };
  }

  addRandomContact = () => {
    let numRandom = Math.floor(Math.random() * contacts.length);
    arrContacts.push(contacts[numRandom]);
    this.setState({
      ...this.state,
      arrContacts
    });
  };

  sortContactsAlph = () => {
    let sortNames = arrContacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      ...this.state,
      sortNames
    });
  };

  sortContactsByPopularity = () => {
    let sortPopularity = arrContacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      ...this.state,
      sortPopularity
    });
  };

  deleteContact(contactID) {
    console.log(contactID);
    let newState = { ...this.state };
    let filteredContacts = newState.arrContacts.filter(
      contact => contact.id !== contactID
    );
    newState.arrContacts = filteredContacts;
    this.setState(newState);
  }

  render() {
    return (
      <div className="oneContacts">
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandomContact} className="random-button">
            Add random contact
          </button>
          <button onClick={this.sortContactsAlph} className="random-button">
            Sort by name
          </button>
          <button
            onClick={this.sortContactsByPopularity}
            className="random-button"
          >
            Sort by popularity
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrContacts.map(contact => (
              <Contact
                deleteMe={() => this.deleteContact(contact.id)}
                key={contact.id}
                picture={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
              ></Contact>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
