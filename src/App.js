import React from 'react';
import './App.css';
import data from './contacts.json'
import DynamicContacts from './components/DynamicContacts/DynamicContacts';

function App() {

  return (
    <div>
      <h1>IronContacts</h1>
      <DynamicContacts data={data} />
      
    </div>
  )
}

export default App;


