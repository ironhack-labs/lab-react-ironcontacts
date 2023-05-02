import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[randomIndex];
    setContactList([...contactList, newContact]);
  };

  const sortByName = () => {
    const sortedList = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sortedList);
  };

  const sortByPopularity = () => {
    const sortedList = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(sortedList);
  };

  const deleteContact = (id) => {
    const filteredList = contactList.filter((contact) => contact.id !== id);
    setContactList(filteredList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
