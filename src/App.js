import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts/Contacts';

function App() {
  console.log(contacts);
  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

export default App;
