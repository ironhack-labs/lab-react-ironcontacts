import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const handleAddRandomContact = () => {
    const remainingContacts = contactsData.filter(contact => !contacts.includes(contact));
    if (remainingContacts.length === 0) {
      alert("No more contacts to add!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    const clone = contacts.slice(); 
    clone.push(randomContact);
    setContacts(clone);
  };

  const handleSortPopularity = () => {
    const sortedContacts = contacts.slice().sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };
  
  const handleSortName = () => {
    const sortedContacts = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };
  

  const handleDeleteContact = (contactId) => {
    const filteredContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="buttonSection">
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortPopularity}>Sort by popularity</button>
      <button onClick={handleSortName}>Sort by name</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="tdImg">
                <img 
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "100px", height: "150px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>Delete</button> {/* Delete button */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
