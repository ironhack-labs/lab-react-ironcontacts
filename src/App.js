import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'
import { render } from '@testing-library/react';
import ContactList from './ContactList'


class App extends Component {

  state = {
    contacts: Contacts.slice(0,5)

  }


  addContact = () => {
    let randomNumber = Math.floor(Math.random() * Contacts.length)
    const newContact = Contacts[randomNumber]
    this.setState((state, props) => ({
      contacts: state.contacts.concat(newContact)
    }))
  }

  sortbyName = () => {

    this.setState((state, props) => ({
      contacts: state.contacts.sort((a,b) => a.name.localeCompare(b.name))
    }))

  }

  sortbyPopularity = () => {

    this.setState((state, props) => ({
      contacts: state.contacts.sort((a,b) => b.popularity - a.popularity)
    }))

  }

  deleteContact = (contactId) => {
    console.log(contactId)
    const newContacts = this.state.contacts.slice().filter(contact => contact.id !== contactId)
    this.setState((state, props) => ({
      contacts: newContacts
    }))

  }


  render()
  {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick = {this.addContact}>Add a Random Contact</button>
      <button onClick = {this.sortbyName}>Sort by name</button>
      <button onClick  = {this.sortbyPopularity}>Sort by poularity</button>
      {this.state.contacts.length === 0 && <h2>No Contacts to display</h2>}
      <div>
            <table>
            <thead>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            </tr>
            </thead>
            <tbody>
            <ContactList contacts ={this.state.contacts} deleteContact={this.deleteContact}/>
            </tbody>
            </table>
            </div>
      
    </div>
  );
  }
}

export default App;
