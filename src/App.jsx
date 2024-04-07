import { useState } from "react";
import "./App.css";

import contacts from "./contacts.json";

function App() {
  const [displayedContacts, setDisplayedContacts] = useState([]);
  const [remainingContacts, setRemainingContacts] = useState(contacts);

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more contact");
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setDisplayedContacts([...displayedContacts, randomContact]);
    const updatedRemainingContacts = remainingContacts.filter(
      (contact) => contact.id !== randomContact.id
    );
    setRemainingContacts(updatedRemainingContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setDisplayedContacts(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setDisplayedContacts(sortedContacts);
  };

  const handleDelete = (id) => {
    const sortedContacts = displayedContacts.filter((contact) => {
      return contact.id !== id;
    });
    setDisplayedContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <th>
                <img src={contact.pictureUrl} alt="" className="image" />
              </th>
              <th>
                <p>{contact.name}</p>
              </th>
              <th>
                <p>{contact.popularity}</p>
              </th>
              <th>{contact.wonOscar ? "🏆" : null}</th>
              <th>{contact.wonEmmy ? "🌟" : null}</th>
              <th>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
