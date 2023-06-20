import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json';

function App() {
  const initialContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(initialContacts);
  function addContact(){
    let randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    contactsToDisplay.push(randomContact)
  }  return (
    <table className="contact-table">
      <thead>
        <button onCLick = {randomContact}>Add Random Contact</button>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🏆' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
