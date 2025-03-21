import { useState } from "react";

import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  {
    /* Iteration 3 */
  }
  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsData.length);
    const randomContact = contactsData[randomIndex];

    if (contacts.some((contact) => contact.id === randomContact.id)) {
      return addRandomContact();
    }
    setContacts((prevContacts) => [...prevContacts, randomContact]);
  };

  {
    /* Iteration 4 */
  }
  const sortByPopularity = () => {
    const sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  };

  const sortByName = () => {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  };

  /* Iteration 5 */
  const removeContact = (contactId) => {
    const filteredContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      {/* Iteration 1 */}

      <div className="actions">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
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
          {contacts.map((contact, index) => (
            <tr key={contact.id || index}>
              <td>
                <img className="contact-img" src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>

              <td>{contact.popularity.toFixed(2)}</td>

              {/* Iteration 2 */}
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>
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
