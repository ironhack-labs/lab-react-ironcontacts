import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactsTablet from './components/ContactsTable/ContactsTable.jsx';
import './App.css';
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }
  addRandom = () => {
    let newState = {
      ...this.state
    }

    newState.contacts.push(contacts[Math.floor(Math.random() * contacts.length)])

    this.setState(newState)
  }
  sortByName = () => {
    let newState = {
      ...this.state
    }

    newState.contacts.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0
    })

    this.setState(newState)
  }
  sortByPopularity = () => {
    let newState = {
      ...this.state
    }

    newState.contacts.sort((a, b) => b.popularity - a.popularity)

    this.setState(newState)
  }
  deleteContact = name => {
    let newState = {
      ...this.state
    }

    newState.contacts = newState.contacts.filter((contact) => contact.name !== name)

    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="Controller">
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <ContactsTablet contacts={this.state.contacts} deleteFunction={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
