import React, { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";
import Table from "./components/Table";

class App extends Component {
  constructor() {
    super();
    let contactList = [...contacts];
    let shownList = contactList.slice(0, 5);
    this.state = {
      displayedContacts: shownList
    }
  }
  addRandom = () => {
    let randomContact = (contacts[Math.floor(Math.random() * contacts.length)])
    let contactCopy = [...this.state.displayedContacts]
    contactCopy.push(randomContact)
    this.setState({ displayedContacts: contactCopy })
  }
  sortName = () => {
    let sortedNames = this.state.displayedContacts.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    this.setState({ displayedContacts: sortedNames })
  }
  sortPopularity = () => {
    let sortedPopularity = this.state.displayedContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })
    this.setState({ displayedContacts: sortedPopularity })
  }
  deleteContact = (index) => {
    let contactCopy = [...this.state.displayedContacts];
    contactCopy.splice(index, 1);
    this.setState({ displayedContacts: contactCopy })
  }
  render() {
    return (
      <div className="App">
        <div className="contactlist">
          <h1>IronContacts</h1>
          <div className="buttons">
            <button onClick={this.addRandom}>Add random contact</button>
            <button onClick={this.sortName}>Sort by name</button>
            <button onClick={this.sortPopularity}>Sort by popularity</button>
          </div>
          <Table
            contacts={this.state.displayedContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
