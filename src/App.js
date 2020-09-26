import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactList from './components/contactlist/ContactList';

function App() {
  return (
    <div className="App">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
