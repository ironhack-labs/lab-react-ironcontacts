// import React, { Component } from 'react';
import React from "react";
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
// import Contact from "./components/Contact"
import ContactsTable from "./components/ContactsTable"

const newList = [...contacts]
const shortList = newList.slice(0, 5)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: shortList
    }
  }

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    const newContacts = shortList.push(randomContact)
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronContacts</h1>
        <button className="addButton" onClick={this.addRandomContact}>
          Add random Contact</button>
        <ContactsTable contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
