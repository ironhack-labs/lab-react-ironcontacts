import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const initialContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(initialContacts);
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setContacts((prevContacts) => [...prevContacts, randomContact]);
    setRemainingContacts((prevRemaining) =>
      prevRemaining.filter((contact) => contact.id !== randomContact.id)
    );
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <button className="mr-4" onClick={addRandomContact}>
          Add Random Contact
        </button>
        <button className="mr-4" onClick={sortByPopularity}>
          Sort by Popularity
        </button>
        <button onClick={sortByName}>Sort by Name</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    height="100"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
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
    </div>
  );
}

export default App;
