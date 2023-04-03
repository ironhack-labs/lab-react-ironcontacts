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

  function deleteContact(index) {
    const deletedContact = [...contacts];
    deletedContact.splice(index, 1);

    setContacts(deletedContact);
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
          {contacts.map((eachContact, i) => (
            <tr key={i}>
              <td>
                <img src={eachContact.pictureUrl} alt={eachContact.name} width="95" />
              </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td>{eachContact.wonOscar ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
              <td>{eachContact.wonEmmy ? <span role="img" aria-label="trophy">🏆</span> : null}</td>
              <td>
                <button onClick={() => deleteContact(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
