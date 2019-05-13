import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactTable from "./components/ContactTable"

class App extends Component {
  state = {
    initialContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
    randomContact: []
  };

  addRandomContact = e => {
    e.preventDefault();
    let {randomContact} = this.state;
    randomContact.push(contacts[Math.floor(Math.random() * contacts.length)])
  }

  render() {
    const { initialContacts, randomContact } = this.state;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button>Add Random Contact</button>
        <ContactTable initialContacts={initialContacts}/>
      </div>
    );
  }
}

export default App;
