import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import contacts from "./contacts.json"

function App() {

  return (
    <div>
    <h1>IronContacts</h1>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
