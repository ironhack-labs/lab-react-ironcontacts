import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './components/ContactsList';

const App = () => (
  <div className="container">
    <h1>IronContacts</h1>
    <ContactsList contacts={contacts} />
  </div>
);

export default App;
