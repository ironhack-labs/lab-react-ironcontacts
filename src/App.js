import './App.css';
import contactsData from './contacts.json';
import React, { useState } from 'react';

function App() {
// Create a atate variable 'contacts' ==> the initial value is set to an array containing first 5 contacts. 
  const [contacts, setContacts] = useState(() => contactsData.slice(0, 5));

  return (
    <div className="App">
    <h1>IronContacts</h1>
      <table className='contacts-container'>
      <thead>
      <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td><img className='img-contact' src={contact.pictureUrl} alt={contact.name} /></td>
            <td>{contact.name}</td>
            <td>{(contact.popularity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;
