import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5, contactsJSON.length)
  );
}
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
      ...remainingContacts.splice(0, randomIndex),
      ...remainingContacts.splice(randomIndex + 1),
    ];
    setRemainingContacts(updatedRemainingContacts);
  }
};

function sortByName() {
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  setContacts(sortedContacts);
}

function sortByPopularity() {
  const sortByPopularity = [...contacts].sort(
    (a, b) => b.popularity - a.popularity
  );
  setContacts(sortByPopularity);
}

function deleteContact(contactId) {
  const updatedContacts = contactsToDisplay.filter((contact) => {
    // console.log("Delete:", contactId)
    return contact.id !== contactId;
  });
  setContacts(updatedContacts);
}

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
            <th>Has won an Oscar</th>
            <th>Has won an Emmy</th>
            <th>Action</th>
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
              <button onClick={() => removeContact(contact.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
