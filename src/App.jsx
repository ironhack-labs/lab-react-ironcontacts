import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  
  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !contactList.includes(contact)
    );
    if (remainingContacts.length > 0) {
      const randomContact =
        remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContactList([...contactList, randomContact]);
    }
  };

  
  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sortedContacts);
  };

  
  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(sortedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="50px" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
