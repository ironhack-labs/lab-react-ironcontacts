import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 20));

  function addRandomContact() {
    const remainingContacts = contacts.filter(
      function(contact) {
        return !contactList.includes(contact);
      }
    );
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContactList([...contactList, randomContact]);
  }

  function sortByName() {
    const sortedContacts = [...contactList].sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
    setContactList(sortedContacts);
  }

  function sortByPopularity() {
    const sortedContacts = [...contactList].sort(
      function(a, b) {
        return b.popularity - a.popularity;
      }
    );
    setContactList(sortedContacts);
  }

  function removeContact(id) {
    const updatedList = contactList.filter(function(contact) {
      return contact.id !== id;
    });
    setContactList(updatedList);
  }

  return (
    <div className="App">
      <h1 className="heading">Contacts</h1>
      <div className="buttons">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <table>
        <thead>
          <tr className="headlines">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(function(contact) {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width="150"/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={function() {
                    removeContact(contact.id)
                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
