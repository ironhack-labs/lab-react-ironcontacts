import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"; // Adjust the path if necessary

function App() {
  // Initialize state with the first 5 contacts
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  // Function to sort contacts by name
  const sortByName = () => {
    const sortedContacts = [...contactsList].sort((a, b) => a.name.localeCompare(b.name));
    setContactsList(sortedContacts);
  };

  // Function to sort contacts by popularity
  const sortByPopularity = () => {
    const sortedContacts = [...contactsList].sort((a, b) => b.popularity - a.popularity);
    setContactsList(sortedContacts);
  };

  // Function to add a random contact
  const addRandomContact = () => {
    // Get the list of remaining contacts that are not currently in the contactsList
    const remainingContacts = contacts.filter(contact => !contactsList.includes(contact));
    
    if (remainingContacts.length === 0) return; // No more contacts to add

    // Randomly select a contact from the remaining contacts
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    
    // Add the selected contact to the contactsList
    setContactsList(prevContacts => [...prevContacts, randomContact]);
  };

  // Function to remove a contact
  const removeContact = (id) => {
    setContactsList(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: "50px", height: "50px" }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
