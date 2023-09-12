import React, { useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json";

function App() {
  // Create state variable 'contacts' and initialize it with an array of the first 5 contacts
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  const [remainingContacts, setRemainingContacts] = useState(
    contactsJson.slice(5)
  );

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more contacts to add.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    const updatedContacts = [...contacts, randomContact];

    const updatedRemainingContacts = [
      ...remainingContacts.slice(0, randomIndex),
      ...remainingContacts.slice(randomIndex + 1),
    ];

    setContacts(updatedContacts);
    setRemainingContacts(updatedRemainingContacts);
  };

  const sortByName = () => {
    const sortedContacts = [... contacts].sort((a,b) =>
    a.name.localeCompare(b.name)
    )
    setContacts(sortedContacts)
  }

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a,b) =>
    b.popularity - a.popularity
    )
    setContacts(sortedContacts)
  }

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="100"
                  height="150"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                {contact.wonOscar ? (
                  <span role="img" aria-label="Oscar Trophy">
                    🏆
                  </span>
                ) : null}
              </td>
              <td>
                {contact.wonEmmy ? (
                  <span role="img" aria-label="Emmy Trophy">
                    🏆
                  </span>
                ) : null}
              </td>
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