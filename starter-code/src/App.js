import React, { Component } from "react";
import contacts from "./contacts.json";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  // addContact() {
  //   let newState = {
  //     ...this.state
  //   };

    
  //   newState.contacts.push(
  //     contacts[Math.floor(Math.random() * contacts.length)]
  //   );

  //   this.setState(newState);
  // }

  addContact() {
    let newState = {
      ...this.state
    };
    
    let newContact = contacts[Math.floor(Math.random() * contacts.length)];

    if(!this.state.contacts.includes(newContact)) {
      newState.contacts.push(newContact)
    } else {
      alert('Contact already exist!')
    }

    this.setState(newState);
  }

  sortContacts() {
    let newState = {
      ...this.state
    };

    newState.contacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState(newState);
  }

  sortByPopularity() {
    let newState = {
      ...this.state
    };

    newState.contacts.sort((a, b) => b.popularity - a.popularity);

    this.setState(newState);
  }

  delete(contactID) {
    let newState = { ...this.state };
    let filteredContacts = newState.contacts.filter(
      contact => contact.id !== contactID
    );

    newState.contacts = filteredContacts;

    this.setState(newState);
  }

  render() {
    const contacts = this.state.contacts.map(contact => (
      <Contact
        key={contact.id}
        name={contact.name}
        img={contact.pictureUrl}
        popularity={contact.popularity}
        toDelete={() => this.delete(contact.id)}
      ></Contact>
    ));
    return (
      <div className="App">
        <nav>
          <button onClick={() => this.addContact()}>Add a Contact</button>
          <button onClick={() => this.sortContacts()}>Sort Contacts</button>
          <button onClick={() => this.sortByPopularity("")}>Popularity</button>
        </nav>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{contacts}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
