import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([...contactsData].slice(0, 5));
  const randomActor = () => {
    const filteredContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    const randomContact =
      filteredContacts[Math.floor(Math.random() * filteredContacts.length)];
    setContacts([...contacts, randomContact]);
    console.log("Added contact: " + randomContact.name);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={randomActor}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => (
            <tr key={id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar && <td>🏆</td>}
              {!contact.wonOscar && <td>No 🏆</td>}
              {contact.wonEmmy && <td>🎖️</td>}
              {!contact.wonEmmy && <td> No🎖️</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
