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
    let allContacts = this.state.actors

    allContacts.push(this.contacts[randomIndex])

    this.setState({
      ...this.state,
      actors: allContacts
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.addNewContact()}>Add new Contact</button>
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
