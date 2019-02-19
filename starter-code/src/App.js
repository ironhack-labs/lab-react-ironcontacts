import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactsTablet from './components/ContactsTable/ContactsTable.jsx';
import './App.css';
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactsTablet contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
