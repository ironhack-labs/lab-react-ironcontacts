import React, { useState } from 'react';
import './App.css';
import contactsData from './contacts.json';

function App() {
  const [contactList, setContactList] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);

      setContactList((prevContacts) => [...prevContacts, randomContact]);
      setRemainingContacts(updatedRemainingContacts);
    } else {
      alert('No more contacts to add!');
    }
  };

  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedContacts);
  };

  const removeContact = (id) => {
    const updatedContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedContactList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '70px', height: '100px' }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>              <td>{contact.wonOscar && <p> 🏆 </p>}</td>
              <td>{contact.wonEmmy && <p> 🌟 </p>}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;