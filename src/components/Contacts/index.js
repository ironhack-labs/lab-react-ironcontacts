import "./index.css";
import contact from "../../contacts.json";

import React, { useState } from "react";

const ContactsTable = () => {
  const [contactsState, setContactsState] = useState(contact.splice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contact.slice(2));

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContactsState([...contact, randomContact]);
      setRemainingContacts(
        remainingContacts.filter((_, i) => i !== randomIndex)
      );
    }
  };

  const deleteContact = (id) => {
    setContactsState(contact.filter((contact) => contact.id !== id));
    setRemainingContacts([...remainingContacts, contact.find((contact) => contact.id === id)]);
  };
  const sortByName = () => {
    setContactsState([...contact].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortByPopularity = () => {
    setContactsState([...contact].sort((a, b) => b.popularity - a.popularity));
  };

  return (
    <div className="ContactsTable">
    <div className="ButtonsContainer">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
    </div>
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
          {contactsState.map((contact) => (
            <tr key={contact.name}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(1)}</td>
              <td>{contact.wonOscar ? "🏆" : "🔴"}</td>
              <td>{contact.wonEmmy ? "🌟" : "🔴"}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
