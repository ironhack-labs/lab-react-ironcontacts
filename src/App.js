import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));
  const restOfContacts = contacts.slice(5);
  const addContact = () => {
    const randomId = Math.floor(Math.random() * restOfContacts.length);
    const randomContact = restOfContacts[randomId];
    setContact((oldContacts) => [...oldContacts, randomContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contact.filter((contact) => contact.id !== id);
    setContact(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contacts List</h1>
      <button onClick={addContact}>Add Random Contact</button>
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
          {contact.map((contact) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
