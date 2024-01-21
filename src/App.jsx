import "./App.css";
import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); 
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  ); 
  let contactsCopy = [...contacts];

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex]; 

      setContacts((prevContacts) => [...prevContacts, randomContact]); 

      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1); 

      setRemainingContacts(updatedRemainingContacts); 
    }
  };
  
  function sortByPopularity() {
    contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(contactsCopy);
  }
  
  function sortedContactsByName() {
    contactsCopy.sort((a, b) => {
    
      return a.name.localeCompare(b.name);
    });
    setContacts(contactsCopy);
  }
  function deleteContact(contactId) {
    const filterContact = contacts.filter((filteredContacts) => {
      return filteredContacts.id !== contactId;
    });
    setContacts(filterContact);
  }
  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortedContactsByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{contact.name} </td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                >
                  delete
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
