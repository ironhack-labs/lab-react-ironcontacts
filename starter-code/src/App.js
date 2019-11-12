import React, { Component } from 'react';
import ContactList from './components/ContactList'
import contacts from './contacts.json';
import './App.css';
import { Button } from 'shards-react';

class App extends Component {
  state = {
    contacts: contacts.slice(0,5),
    restOfContacts: contacts.slice(5)
  }

  randomContact = () => {
    let restOfContacts = this.state.restOfContacts;
    let index = Math.floor(Math.random() * restOfContacts.length);
    let newContact = this.state.restOfContacts[index];
    let contacts = [...this.state.contacts];

    // add contact to the list to be displayed
    contacts.push(newContact);

    // remove recently added contact from rest of contacs
    restOfContacts.splice(index, 1);

    // Update state
    this.setState({
      contacts,
      restOfContacts
    })
  }

  sortByName = () => {
    let contacts = [...this.state.contacts];
    let namesSorted = contacts.sort( (a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
    this.setState({
      contacts: namesSorted
    })
  }

  sortByPopularity = () => {
    let contacts = [...this.state.contacts];
    let popularitySorted = contacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: popularitySorted
    })
  }

  deleteContact = index => {
    const contacts = [...this.state.contacts];
    contacts.splice(index, 1);
    this.setState({
      contacts
    })
  }

  render() {
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className='ButtonSet'>
          <Button outline theme="light" onClick={this.randomContact}>Add Random Contact</Button>
          <Button outline theme="light" onClick={this.sortByName}>Sort By Name</Button>
          <Button outline theme="light" onClick={this.sortByPopularity}>Sort By Popularity</Button>
        </div>
        <ContactList contacts={this.state.contacts} clickToDelete={() => this.deleteContact}/>

      </div>
    );
  }
}

export default App;
