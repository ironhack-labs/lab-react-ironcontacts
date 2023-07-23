import React from 'react';
import { useState } from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(30, 35));
  const remainingContacts = contacts.slice(0, 30).concat(contacts.slice(35));
  const getRemainingContacts = () => {
    const addedContactIds = contactsList.map((contact) => contact.id);
    return contacts.filter((contact) => !addedContactIds.includes(contact.id));
  };

  const getRandomContact = () => {
    const remainingContacts = getRemainingContacts();
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    return remainingContacts[randomIndex];
  };

  const handleAddRandomContact = () => {
    const remainingContacts = getRemainingContacts();

    if (remainingContacts.length === 0) {
      alert('No more contacts to add!');
      return;
    }
    const randomContact = getRandomContact();
    setContactsList((prevContacts) => [...prevContacts, randomContact]);
  };
  return (
    <div className="App">
      <h1>Contacts List</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contactsList.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} width="100" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🏆' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
