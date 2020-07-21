import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
     
        <Contacts />
        
    </div>
  );
}

export default App;
