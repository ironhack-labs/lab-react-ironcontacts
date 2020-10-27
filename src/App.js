import React from 'react';
import Contacts from './components/Contacts'

import './App.css';
import contacts from './contacts.json';


function App() {
  return (
    <div className="app">
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
