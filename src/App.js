// src/App.js
import "./App.css";
import data from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(data.slice(0, 5));
  const remainingContacts = data.slice(5);

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContacts([...contacts, randomContact]);
  };

  const sortByPopularity = () => {
    const sortedPopularity = [...contacts].sort((a, b) =>
      b.popularity < a.popularity ? -1 : 1
    );
    setContacts(sortedPopularity);
  };
  const sortByName = () => {
    const sortedName = [...contacts].sort((a, b) => (b.name > a.name ? -1 : 1));
    setContacts(sortedName);
  };

  const deleteContact = (id) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContact);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🏆</td> : <td></td>}
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
