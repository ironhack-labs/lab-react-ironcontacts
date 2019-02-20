import React, { Component } from 'react';
import './App.css';
import ContactsTable from './components/ContactsTable/ContactsTable';
import contacts from './contacts.json';
import FunctionButton from './components/FunctionButton/FunctionButton';

class App extends Component {
  state = {
    list: contacts.slice(0, 5)
  }
  addRandomContact = () => {
    let newState = {
      ...this.state
    }
    newState.list.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState(newState)
  }
  sortByName = () => {
    let newState = {
      ...this.state
    }
    newState.list.sort((a, b) => {
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
    newState.list.sort((a, b) => b.popularity - a.popularity)

    this.setState(newState)
  }
  deleteContact = (name) => {
    let newState = {
      ...this.state
    }
    newState.list = newState.list.filter(e => e.name !== name)

    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="controller">
          <FunctionButton functionProp={this.addRandomContact}>Add Random Contacts</FunctionButton>
          <FunctionButton functionProp={this.sortByName}>Sort by name</FunctionButton>
          <FunctionButton functionProp={this.sortByPopularity}>Sort by popularity</FunctionButton>
        </div>
        <ContactsTable deleteProp={this.deleteContact} contactsProp={this.state.list} />
      </div>
    );
  }
}

export default App;
