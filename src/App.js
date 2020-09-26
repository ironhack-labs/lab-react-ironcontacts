import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
