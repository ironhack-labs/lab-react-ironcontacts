import React from 'react';
import contactsArr from './contacts.json';
import Contacts from './components/Contacts'
import './App.css';


function App() {
  return (
    <div>
      <h1>IronContacts</h1>
      <Contacts array={contactsArr}/>
    </div>
  );
}

export default App;
