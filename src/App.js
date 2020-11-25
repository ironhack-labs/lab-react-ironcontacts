import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactsState, setContactsState] = useState([]);

  useEffect(() => {
    const firstFiveContacts = [];
    for (let i = 0; i < 5; i++) {
      firstFiveContacts.push(contacts[i]);
    }
    setContactsState(firstFiveContacts);
  }, []);

  const addRandomContact = () => {
    const contactsStateCopy = [...contactsState];
    const random = Math.floor(Math.random() * contacts.length);
    contactsStateCopy.push(contacts[random]);
    console.log(contactsStateCopy);
    setContactsState(contactsStateCopy);
  };

  const sortByName = () => {
    const contactsStateCopy = [...contactsState];
    contactsStateCopy.sort((a, b) => a.name.localeCompare(b.name));
    setContactsState(contactsStateCopy);
  };

  const sortByPopularity = () => {
    const contactsStateCopy = [...contactsState];
    contactsStateCopy.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    setContactsState(contactsStateCopy);
  };

  const deleteContact = (id) => {
    const contactsStateCopy = [...contactsState];
    const index = contactsStateCopy.findIndex((contact) => contact.id === id);
    contactsStateCopy.splice(index, 1);
    setContactsState(contactsStateCopy);
  };

  return (
    <div className="App">
      <div className="ButtonsContainer">
        <button onClick={() => addRandomContact()}>Add Random Contact</button>
        <button onClick={() => sortByName()}>Sort By Name</button>
        <button onClick={() => sortByPopularity()}>Sort By Popularity</button>
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
          {contactsState.map((contact, i) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="Profile Pic"></img>
              </td>
              <td>
                <h2>{contact.name}</h2>
              </td>
              <td>
                <h2>{contact.popularity}</h2>
              </td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
