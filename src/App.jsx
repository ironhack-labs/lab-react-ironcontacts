import "./App.css";
import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const randomContact =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    if (!contacts.includes(randomContact)) {
      setContacts(() => [randomContact, ...contacts]);
    }
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
    const filteredContacts = contacts.filter(
      (celebrity) => celebrity.id !== id
    );
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button className="button-9" onClick={addRandomContact}>
        Add random contact
      </button>

      <button className="button-9" onClick={sortByName}>
        Sort by name
      </button>

      <button className="button-9" onClick={sortByPopularity}>
        Sort by popularity
      </button>

      <div className="tableContainer">
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
            {contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
