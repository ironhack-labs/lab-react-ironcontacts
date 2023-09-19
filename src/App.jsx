import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

const App = () => {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );
};
const App = () => {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );
  const renderAwards = (won) => {
    return won ? "🏆🌟" : "";
  };
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

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="100px"
                  height="100px"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar ? <td> 🏆 </td> : <td></td>}
                <button onClick={() => removeContact(contact.id)}>
                  Delete
                </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
