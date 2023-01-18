import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  function addRandomContact() {
    const newContact =
      contactsList[Math.floor(Math.random() * contactsList.length)];

    if (!contacts.includes(newContact)) {
      setContacts([newContact, ...contacts]);
    }
  }

  function sortByPopularity() {
    const newContacts = [...contacts];

    newContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setContacts(newContacts);
  }

  function sortByName() {
    const newContacts = [...contacts];

    newContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setContacts(newContacts);
  }

  function handleDeleteContact(contactId) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="btn-group">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <b>Picture</b>
            </th>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Popularity</b>
            </th>
            <th>
              <b>Won Oscar</b>
            </th>
            <th>
              <b>Won Emmy</b>
            </th>
            <th>
              <b>Actions</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr key={contacts.id} className="table-contents">
                <td>
                  <img src={contacts.pictureUrl} alt={contacts.name} />
                </td>
                <td>
                  <b>{contacts.name}</b>
                </td>
                <td>
                  <b>{contacts.popularity}</b>
                </td>
                <td>{contacts.wonOscar ? "🏆" : ""}</td>
                <td>{contacts.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteContact(contacts.id)}
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
