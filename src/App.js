import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './Components/Table'
import contacts from './contacts.json';
var cloneContacts = [...contacts];
var fiveContacts = cloneContacts.slice(0,5);





function App() {
  return (
    <div className="App">
      <Table contacts={fiveContacts} />
    </div>
  );
}

export default App;
