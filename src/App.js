import React from 'react';
import './App.css';
import ContactsCard from './components/ContactsCard';
import contacts from './contacts.json';

function App() {
  return (
    <ContactsCard contacts={contacts}/>
  );
}

export default App;
