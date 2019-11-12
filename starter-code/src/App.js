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
    let immutableStateOfContacts = [...this.state.contacts];

    // add contact to the list to be displayed
    immutableStateOfContacts.push(newContact);

    // remove recently added contact from rest of contacs
    restOfContacts.splice(index, 1);

    // Update state
    this.setState({
      contacts: immutableStateOfContacts,
      restOfContacts
    })

  }

  render() {
    console.log(this.state.restOfContacts);
    
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button outline theme="light" onClick={this.randomContact}>Add Random Contact</Button>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
