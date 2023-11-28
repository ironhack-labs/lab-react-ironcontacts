import React, { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );

  const removeContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const renderAwards = (won) => {
    return won ? "🏆🌟" : "";
  };

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContacts((prevContacts) => [...prevContacts, randomContact]);

      const updatedRemainingContacts = [
        ...remainingContacts.slice(0, randomIndex),
        ...remainingContacts.slice(randomIndex + 1),
      ];

      setRemainingContacts(updatedRemainingContacts);
    }
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>

        <div className="contacts-list">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <img
                src={contact.pictureUrl}
                alt={contact.name}
                style={{ height: "100px" }}
              />
              <div>
                <p>
                  <strong>Name:</strong> {contact.name}
                </p>
                <p>
                  <strong>Popularity:</strong> {contact.popularity}
                </p>
                <p>
                  <strong>Won an Oscar:</strong>{" "}
                  {renderAwards(contact.wonOscar)}
                </p>
                <p>
                  <strong>Won an Emmy:</strong> {renderAwards(contact.wonEmmy)}
                </p>
                <button onClick={() => removeContact(contact.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
