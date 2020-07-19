import React from 'react';
import './App.css';
import AllContacts from './components/AllContacts';
import Contacts from './components/Contacts';
import contacts from './contacts.json';



function App() {
  return (
    <div className="App">
    <AllContacts/>
    <Contacts/>      
    </div>
  );
}

export default App;
