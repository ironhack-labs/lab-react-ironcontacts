import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import ContactList from './components/ContactList';


class App extends Component {
  state = {
    arrayofContacts: contacts,
    contacts: contacts.splice(0, 5),
   // name: contacts.name
    }

  addRandomContact = () => {
    const numberContact = this.state.arrayofContacts.length;
    const num = Math.floor(Math.random() * numberContact);
    const newContact = this.state.arrayofContacts[num];
    const newCon = [...this.state.contacts, newContact]

    this.setState({contacts: newCon})
  }

  sortedContacts = () => {
     const sorted = this.state.contacts.sort( (a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
     })
     this.setState({contacts: sorted})
  }

  render() {

    const { contacts } = this.state;

    return (

      <div className="App">

        <button onClick={this.addRandomContact}>New Contact</button>
        <button onClick={this.sortedContacts}>Sort Contacts</button>
        {
          contacts.map( (contacts) => {
              return <ContactList contacts={contacts} />
          })
        }
        
      </div>
    );
  }
}

export default App;
