import React from 'react';
import './App.css';

import contacts from '../contacts.json';

import ContactList from './Contacts/Contacts'

function App() {

  return (
    <>

      <h1>IronContacts</h1>

      <ContactList />
    </>
  );
}

export default App;
