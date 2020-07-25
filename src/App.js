import React from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Contacts contactsNumber="5" />
    </div>
  );
}

export default App;
