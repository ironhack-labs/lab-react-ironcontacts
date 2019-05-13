import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactTable from "./components/ContactTable"

class App extends Component {
  state = {
    initialContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
    randomContact: [],
  };

  addRandomContact = () => {
    let {randomContact} = this.state;
    randomContact.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({randomContact})
  }

  compare = (a, b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  sortByName = () => {
    let {randomContact, initialContacts} = this.state;
    initialContacts.sort(this.compare);
    this.setState({initialContacts})
  }

  render() {
    const { initialContacts, randomContact } = this.state;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button>Sort by popularity</button>
        <ContactTable initialContacts={initialContacts} contacts={contacts} randomContact={randomContact}/>
      </div>
    );
  }
}

export default App;
