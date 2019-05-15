import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import ContactList from './components/ContactList';


class App extends Component {
  state = {
    arrayofContacts: contacts,
    contacts: contacts.splice(0, 5)
    }

  addRandomContact = () => {
    const numberContact = this.state.arrayofContacts.length;
    const num = Math.floor(Math.random() * numberContact);
    const newContact = this.state.arrayofContacts[num];
    const newCon = [...this.state.contacts, newContact]

    this.setState({contacts: newCon})
  }

  render() {

    const { contacts } = this.state;

    return (

      <div className="App">

        <button onClick={this.addRandomContact}>New Contact</button>
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
