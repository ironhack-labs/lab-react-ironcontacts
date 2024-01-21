import "./App.css";
import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); // used the slice method to select the first 5
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  ); // slice method again to select the starting index for the remaining contacts
  let contactsCopy = [...contacts];
  // console.log("remainingContacts", remainingContacts);
  console.log("contacts", contacts);
  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      // added the conditional to make sure it doesn't go over the number of objects in my array
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex]; // used randomisation formula to randomly pick a contact from the remaining ones

      setContacts((prevContacts) => [...prevContacts, randomContact]); // add random contact to all those that were displayed before

      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1); // remove the contact to avoid repetition of objects

      setRemainingContacts(updatedRemainingContacts); // selected contact is no longer contained in the array
    }
  };
  //sorting the random contacts by Poplarity
  function sortByPoplarity() {
    contactsCopy.sort((a, b) => {
      console.log("contactsCopy", contactsCopy);
      return b.popularity - a.popularity;
    });
    setContacts(contactsCopy);
  }
  //sorting the random contacts by name
  function sortedContactsByName() {
    contactsCopy.sort((a, b) => {
      console.log("contactsCopy", contactsCopy);
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
      <button onClick={sortByPoplarity}>Sort by popularity</button>
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
