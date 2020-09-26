import React from 'react';
import './App.css';
import contacts from './contacts.json';
import ListContacts from './components/ListContacts';

const App = () => (
  <div className="container">
    <h1>IronContacts</h1>
    <ListContacts contacts={contacts} />
  </div>
);

export default App;
