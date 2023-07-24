import React from 'react';
import { useState } from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(30, 35));
  const [sortByName, setSortByName] = useState(false);
  const [sortByPopularity, setSortByPopularity] = useState(false);
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

    const handleDeleteContacts = (id) => {
      const updatedContacts = contactsList.filter((contact) => contact.id !== id);
    setContactsList(updatedContacts);
  };

    const handleSortByName = () => {
      const sortedContacts = [...contactsList].sort((a, b) => {
        if(sortByName){
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      setContactsList(sortedContacts);
      setSortByName((prevSort) => !prevSort);
    };

    const handleSortByPopularity = () => {
      const sortedContacts = [...contactsList].sort((a, b) => {
        if(sortByPopularity){
          return a.popularity - b.popularity;
        } else {
          return b.popularity - a.popularity;
        }
      });
      setContactsList(sortedContacts);
      setSortByPopularity((prevSort) => !prevSort);
    };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortByName}>Sort By Name</button>
      <button onClick={handleSortByPopularity}>Sort By Popularity</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contactsList.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} width="100" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🏆' : ''}</td>
            <td><button onClick={() => handleDeleteContacts(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App;
