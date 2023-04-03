import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import React, { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5, contactsJSON.length)
  );


  function addRandomContact() {
    // Making a copy of the remaining contacts
    const updateRemaining = [...remainingContacts];

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNum, 1)[0];
    const updateContacts = [...contacts, randomContact];
    setContacts(updateContacts);
    setRemainingContacts(updateRemaining);
  }

  function sortByPopularity() {
    const toSortPopularity = [...contacts];
    const sortedByPopularity = toSortPopularity.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  }

  function sortByName() {
    const toSortName = [...contacts];
    const sortedByName = toSortName.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttons">
      <button onClick={() => addRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      </div>
     

      <table>
        <thead>
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
                <img src={contact.pictureUrl} alt={contact.name} width="95" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
              <td>{contact.wonEmmy ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
