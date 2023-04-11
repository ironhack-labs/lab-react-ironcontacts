import contactsJson from './contacts.json';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [contact, setContact] = useState(contactsJson.slice(0, 5));
  const remainingContacts = contactsJson.slice(5);

  function addRandomContact() {
    const randomContact = remainingContacts[Math.floor(Math.random() * 47)];
    setContact((previousState) => [randomContact, ...previousState]);
  }

  function sortByPopularity() {
    setContact((previousState) => {
      const toBeSorted = [...previousState];
      return toBeSorted.sort((a, b) => b.popularity - a.popularity);
    });
  }

  function sortByName() {
    setContact((previousState) => {
      const toBeSorted = [...previousState];
      return toBeSorted.sort((a, b) => (a.name < b.name ? -1 : 1));
    });
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contact.filter((contact) => {
      return contact.id !== contactId;
    });

    setContact(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}> Add Random Contact </button>
      <button onClick={sortByPopularity}> Sort by Popularity </button>
      <button onClick={sortByName}> Sort by Name </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map(
            ({ pictureUrl, name, popularity, wonOscar, wonEmmy, id }) => {
              return (
                <tr>
                  <td>
                    <img src={pictureUrl} alt='picture_url' width={100} />
                  </td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  <td>{wonOscar ? '🏆' : null}</td>
                  <td>{wonEmmy ? '🏆' : null}</td>
                  <button onClick={() => deleteContact(id)}>Delete</button>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
