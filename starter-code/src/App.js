import React, { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";
import Table from "./components/Table";

class App extends Component {
  state = {
    contactList: contacts,
    displayedContacts: contacts.slice(0, 5)
  };
  addRandom = () => {
    let randomContact = (this.state.contactList[Math.floor(Math.random() * this.state.contactList.length)])
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
          />
        </div>
      </div>
    );
  }
}

export default App;
