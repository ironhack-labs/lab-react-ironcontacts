import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fiveContacts: [...contacts].slice(0, 5),
      allContacts: [...contacts],
    }

    this.randomContact = this.randomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.removeContact = this.removeContact.bind(this);

  }

  randomContact() {
    const oneContact = this.state.allContacts[Math.floor(Math.random()*this.state.allContacts.length)];
    const arr = [...this.state.fiveContacts]
    arr.push(oneContact)

    this.setState({
        fiveContacts: arr
    })
  }

  sortByName() {
      const arr = [...this.state.fiveContacts];
      arr.sort((a,b) => a.name.localeCompare(b.name))
      this.setState({
        fiveContacts: arr
    })
  }

  sortByPopularity() {
      const arr = [...this.state.fiveContacts]
      arr.sort((a,b) => b.popularity - a.popularity)
      this.setState({
        fiveContacts: arr
    })
  }

  removeContact(idx) {
    const arr = [...this.state.fiveContacts];
    arr.splice(idx, 1)
    this.setState({
      fiveContacts: arr
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>


        <Contacts contactList={this.state.fiveContacts} removeContact={this.removeContact}></Contacts>
      </div>
    );
  }
}

export default App;
