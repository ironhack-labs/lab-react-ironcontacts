import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './ContactsList';

export default class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Iron Contacts</h1>
          <ContactsList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
