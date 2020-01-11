import React, { Component } from 'react';
import './App.css';
import ContactsTable from './components/contacts/ContactsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <ContactsTable/>
      </div>
    );
  }
}

export default App;
