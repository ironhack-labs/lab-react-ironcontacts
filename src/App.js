// src/App.js
import Allcontacts from "./contacts.json";

import "./App.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(Allcontacts.slice(0, 5));

  const handleAddContact = () => {
    const randomContact =
      Allcontacts[Math.floor(Math.random() * Allcontacts.length)];
    const copy = [...Allcontacts];

    copy.push(randomContact);
    setContacts(copy);
  };

  const handleSortContactName = () => {
    const copy = [...Allcontacts];
    copy.sort((a, b) => (a.name > b.name ? -1 : 1));
    setContacts(copy);
  };

  const handleSortContactPopularity = () => {
    const copy = [...Allcontacts];
    copy.sort((a, b) => b.popularity - a.popularity);
    setContacts(copy);
  };

  const handleDelete = (id) => {
    const newList = contacts.filter((contact) => contact.id !== id);
    setContacts(newList);
  };

  return (
    <div className="App">
      <table>
        <div class="buttons">
          <button onClick={handleAddContact}>Add Random contact</button>
          <button onClick={handleSortContactName}>Sort by name</button>
          <button onClick={handleSortContactPopularity}>
            Sort by popularity
          </button>
        </div>
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
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="{contact.name}"></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>
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
