import "./App.css";
import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const adRandom = () => {
    let random = contactsData[Math.floor(Math.random() * contactsData.length)];
    setContacts([random, ...contacts]);
  };

  const sortPop = () => {
    contacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContacts([...contacts]);
  };

  const sortName = () => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts([...contacts]);
  };

  const deleteContact = (id) => {
    const filtered = contacts.filter((el) => {
      return el.id !== id;
    });
    setContacts(filtered);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => adRandom()}>Add Random Contact</button>
      <button onClick={() => sortPop()}>Sort by popularity</button>
      <button onClick={() => sortName()}>Sort by name</button>
      <div className="tabela">
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
            {contacts.map((contact) => {
              return (
                <tr>
                  <img src={contact.pictureUrl} alt={contact.name} />
                  <td>{contact.name}</td>
                  <td>{Math.floor(contact.popularity)}</td>
                  <td>{contact.wonOscar && <p>🏆</p>}</td>
                  <td>{contact.wonEmmy && <p>🏆</p>}</td>
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
