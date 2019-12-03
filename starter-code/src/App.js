import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  constructor() {
    super();
    this.randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    this.contacts = [...contacts];
    this.newContacts = this.contacts.splice(0, 5);

    this.state = {
      actors: this.newContacts
    };
  }

  addNewContact() {
    let randomIndex = this.randomInt(0, this.contacts.length);
    let allContacts = this.state.actors;

    allContacts.push(this.contacts[randomIndex]);

    this.setState({
      ...this.state,
      actors: allContacts
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
