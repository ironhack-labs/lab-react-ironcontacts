import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.some((c) => c.id === contact.id),
    );
    if (remainingContacts.length === 0) return;

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts([...contacts, randomContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button className="btn-add" onClick={addRandomContact}>
        Add Random Contact
      </button>

      <button
        className="btn-sort"
        onClick={() =>
          setContacts([...contacts].sort((a, b) => b.popularity - a.popularity))
        }
      >
        Sort by popularity
      </button>

      <button
        className="btn-sort"
        onClick={() =>
          setContacts(
            [...contacts].sort((a, b) => a.name.localeCompare(b.name)),
          )
        }
      >
        Sort by name
      </button>

      <table>
        <thead>
          <tr>
            <th className="row-title">Picture</th>
            <th className="row-title">Name</th>
            <th className="row-title">Popularity</th>
            <th className="row-title">
              Won an
              <br /> Oscar
            </th>
            <th className="row-title">
              Won an <br />
              Emmy
            </th>
            <th className="row-title">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  className="contact-img"
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
  );
}

export default App;
