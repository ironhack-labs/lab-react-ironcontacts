import React from 'react';
import Contacts from '../contacts.json'
import './App.css';
import Table from './Table'

function App() {
  return (
    <main className = 'list'>
      <h1>IronContacts</h1>
      <Table/>    

    </main>
  );
}

export default App;
