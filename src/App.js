import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contacts.slice(5)
  );

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more contacts to add!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContactList((prevList) => [...prevList, randomContact]);
    setRemainingContacts((prevList) =>
      prevList.filter((contact) => contact.id !== randomContact.id)
    );
  };

  const deleteContact = (id) => {
    setContactList((prevList) => prevList.filter((contact) => contact.id !== id));
    setRemainingContacts((prevList) => [
      ...prevList,
      contacts.find((contact) => contact.id === id),
    ]);
  };

  const renderTrophy = (won) => {
    return won ? <span role="img" aria-label="trophy">🏆</span> : null;
  };

  const sortByName = () => {
    setContactList((prevList) =>
      [...prevList].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const sortByPopularity = () => {
    setContactList((prevList) =>
      [...prevList].sort((a, b) => b.popularity - a.popularity)
    );
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{renderTrophy(contact.wonOscar)}</td>
              <td>{renderTrophy(contact.wonEmmy)}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;