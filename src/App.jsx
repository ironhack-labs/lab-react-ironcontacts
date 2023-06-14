import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [contactsDataFiltered, setContactsDataFiltered] = useState(contactsData);

  function addRandomContact() {
    const contactsFiltered = contactsData.filter(
      (contactData) => !contacts.some((contact) => contact.id === contactData.id)
    );
    setContactsDataFiltered(contactsFiltered);
    setContacts([
      ...contacts,
      contactsFiltered[Math.floor(Math.random() * contactsFiltered.length)],
    ]);
  }

  function sortByPopularity() {
    const contactsSorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(contactsSorted);
  }

  function sortByName() {
    const contactsSorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(contactsSorted);
  }

  function removeContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      {contactsDataFiltered.length > 1 && (
        <button onClick={addRandomContact}>Add Random Contact</button>
      )}
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      {contacts.length > 0 && (
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
                  <img className="contact__img" src={contact.pictureUrl} alt="actor" />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar && <span>🏆</span>}</td>
                <td>{contact.wonEmmy && <span>🌟</span>}</td>
                <td>
                  <button onClick={() => removeContact(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
