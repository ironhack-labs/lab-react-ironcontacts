import "./App.css";
import allContacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const initialContacts = allContacts.slice(0, 5);
  const remaingContacts = allContacts.slice(5);

  const [contact, setContact] = useState(initialContacts);

  const addRandomContact = () => {
    const randomContactIndex = Math.floor(
      Math.random() * remaingContacts.length
    );
    const randomContact = remaingContacts[randomContactIndex];
    const newContactsList = [...contact];
    newContactsList.push(randomContact);
    remaingContacts.splice(randomContactIndex, 1);
    return setContact(newContactsList);
  };

  const sortByName = () => {
    const copy = [...contact];
    const sortedByName = copy.sort((a, b) => (a.name > b.name ? 1 : -1));
    return setContact(sortedByName);
  };

  const sortByPopularity = () => {
    const contactCopy = [...contact];
    const sortedByPopularity = contactCopy.sort(
      (a, b) => b.popularity - a.popularity
    );
    return setContact(sortedByPopularity);
  };

  const deleteContact = (id) => {
    setContact((current) =>
      current.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button
        onClick={() => {
          sortByPopularity(contact.id);
        }}
      >
        Sort by popularity
      </button>
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
          {contact.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="contactPicture" />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar ? <h1>🏆</h1> : ""}</td>
                <td>{contact.wonEmmy ? <h1>🌟</h1> : ""}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
