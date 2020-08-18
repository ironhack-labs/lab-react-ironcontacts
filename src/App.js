import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts'


function App() {
  return (
    <div className="App">
      <h1>IRONCONTACTS</h1>
      <Contacts list={contacts}/>
    </div>
  );
}

export default App;
