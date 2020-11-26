import React, { useState} from 'react'
import './App.css';
import contacts from './contacts.json'

const App = () => {
  const fiveContacts = contacts.slice(0,5);
  const [contactsState, setcontactsState] =useState (fiveContacts);

  return (

  )

};

export default App
