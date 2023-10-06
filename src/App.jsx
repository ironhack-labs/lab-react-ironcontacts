
import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"

function App() {

  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    let isDuplicate = true;
    let randomContact;
    let attempts = 0;

    while (isDuplicate && attempts < contacts.length) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      randomContact = contacts[randomIndex];
      isDuplicate = displayedContacts.some(contact => contact.id === randomContact.id);
      attempts++;
    }
    if (!isDuplicate) {
      setDisplayedContacts([...displayedContacts, randomContact]);
    }
  }

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setDisplayedContacts(sortedContacts);
  }

  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setDisplayedContacts(sortedContacts);
  }

  const deleteContact = (id) => {
    const updatedContacts = displayedContacts.filter(contact => contact.id !== id);
    setDisplayedContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact} >Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

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
          {displayedContacts.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} width="50px" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "⭐" : ""}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
