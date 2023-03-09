import React from "react";
import { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Contacts from "./contacts.json";

export default function App() {
  let list = Contacts.slice(0, 5);
  const [contacts, setContacts] = useState(list);
  function randomHandler() {
    let random = Contacts[Math.floor(Math.random() * Contacts.length)];
    setContacts([random, ...contacts]);
  }
  function sortByPopularityHandler() {
    const sortedDataByPopularity = [...contacts].sort((a, b) =>
      b.popularity > a.popularity ? 1 : a.popularity > b.popularity ? -1 : 0
    );
    setContacts(sortedDataByPopularity);
  }
  function sortByNameHandler() {
    const sortedDataByName = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedDataByName);
  }
  function deleteContacts(id) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomHandler}>Add Random Contact</button>
      <button onClick={sortByNameHandler}>Sort by name</button>
      <button onClick={sortByPopularityHandler}>Sort by popularity</button>
      <table key={contacts.id}>
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
        {contacts.map((contact) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="celeb" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
                <td>
                  <button onClick={() => deleteContacts(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
