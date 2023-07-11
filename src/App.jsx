import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const remainingContacts = contacts.slice(5);

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      const newContactList = [...contactList, randomContact];
      setContactList(newContactList);
    }
  };

  const sortByPopularity = () => {
    const sortedList = contactList
      .slice()
      .sort((a, b) => a.popularity - b.popularity);
    setContactList(sortedList);
  };

  const sortByName = () => {
    const sortedList = contactList
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedList);
  };

  const removeContact = (id) => {
    const updatedContactList = contactList.filter(
      (contact) => contact.id !== id
    );
    setContactList(updatedContactList);
  };

  return (
    <div>
      <h1>Contacts</h1>
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
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} height="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(1)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                {" "}
                <button onClick={() => removeContact(contact.id)}>
                  Remove
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
