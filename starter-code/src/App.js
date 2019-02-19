import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Table from  './components/table/table.jsx'
import ButtonRandom from  './components/buttons/buttonRandom.jsx'
import ButtonSort from './components/buttons/buttonSort';

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

  sortContacts = () => {
    let newState = {
      ...this.state
    }

    newState.contacts.sort((a,b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    this.setState(newState)
  }


  popContacts = () => {
    let newState = {
      ...this.state
    }

    newState.contacts.sort((a,b) => {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    })
    this.setState(newState)
  }

  deleteContacts = (name) => {
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
        <ButtonRandom onClick={this.addRandom}>Add Random Contact</ButtonRandom>
        <ButtonSort onClick={this.sortContacts}>Sort by name</ButtonSort>
        <ButtonSort onClick={this.popContacts}>Sort by popularity</ButtonSort>
        <Table deleteContacts={this.deleteContacts} contacts={this.state.contacts} />
        
      </div>
    );
  }
}

export default App;
