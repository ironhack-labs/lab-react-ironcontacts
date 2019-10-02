import React, { Component } from "react";
import { contacts } from "./contacts";
import "./App.css";
import Contact from "./Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }
  sortbyName = () => {
    let newState = {
      ...this.state
    };
    let sortbyName = newState.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
    this.setState(sortbyName);
  };
  AddRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    let clonedContactsList = [...this.state.contacts];
    clonedContactsList.push(randomContact);

    this.setState({
      ...this.state,
      contacts: clonedContactsList
    });
  }
  SortByPopularity() {
    const sortedByPopularity = [...this.state.contacts];
    sortedByPopularity.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));

    this.setState({
      ...this.state,
      contacts: sortedByPopularity
    });
  }
  removeContact(name) {
    let clonedContactsList = [...this.state.contacts];
    const index = clonedContactsList.findIndex(a => a.name === name);

    if (index === -1) return;
    clonedContactsList.splice(index, 1);

    this.setState({
      ...this.state,
      contacts: clonedContactsList
    });
  }
  render() {
    return (
      <section className="container">
        <h1>IronContacts</h1>
        <button onClick={() => this.sortbyName()}>Sort by name</button>
        <button onClick={() => this.AddRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.SortByPopularity()}>
          Sort by popularity
        </button>
        <table className="contact-info">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, idx) => {
              return (
                <Contact
                  key={idx}
                  {...contact}
                  onClick={() => this.removeContact(contact.name)}
                ></Contact>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;
