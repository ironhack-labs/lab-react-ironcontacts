import React from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  const fiveContacts = [...contacts].slice(0, 5)

  return (
    <div>
      <h1>IronContacts</h1>
      {
        fiveContacts.map((contact) => {
          return <div key={contact.id}> <img width="50" src={contact.pictureUrl} /> {contact.name} | {contact.popularity.toFixed(2)}</div>
        })
      }
    </div>
  );
}

export default App;
