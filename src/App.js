import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsTable from "./components/contactsTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronContacts</h1>
     <ContactsTable contacts='5'/>
      </header>
    </div>
  );
}

export default App;
