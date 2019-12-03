import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  constructor() {
    super();
    this.randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    this.contactsClone = [...contacts];
    this.newContacts = this.contactsClone.splice(0, 5);

    this.state = {
      actors: this.newContacts
    };
  }

  addNewContact() {
    let contacts2 = this.contactsClone.filter(contact => !this.newContacts.includes(contact));
    console.log(contacts2)
    let randomIndex = this.randomInt(0, contacts2.length -1);
    this.newContacts.push(contacts2[randomIndex]);

    this.setState({
      ...this.state,
      actors: this.newContacts
    });
  }

  sortByName() {
    let newAllContacts = [...this.state.actors];

    let contactsSort = newAllContacts.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      actors: contactsSort
    });
  }

  sortByPopularity() {
    let newAllContacts = [...this.state.actors];

    let contactsSort = newAllContacts.sort(function(a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({
      ...this.state,
      actors: contactsSort
    });
  }

  deleteContact(index) {
    this.newContacts.splice(index, 1);

    this.setState({
      ...this.state,
      actors: this.newContacts
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.addNewContact()}>Add new Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by popularity
        </button>
        <table>
          <tbody>
            {this.state.actors.map((actor, idx) => {
              return (
                <ContactList
                  key={idx}
                  picture={actor.pictureUrl}
                  name={actor.name}
                  popularity={actor.popularity}
                  deleteContact={() => this.deleteContact(idx)}
                ></ContactList>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
