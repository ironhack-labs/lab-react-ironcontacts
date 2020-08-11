import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactList from './components/ContactList/ContactList';


class App extends Component {

  state = {
    contactsInit: contacts.filter((contact, index) => index < 5),
    restContacts: contacts.filter((contact, index) => index >= 5)
  }

  render() {
    return (
      <div className="App">
        <h1>Iron contacts</h1>
        <ContactList contactsAvailables={this.state.contactsInit} restContacts={this.state.restContacts} />
      </div>
    )
  }
}

export default App;
