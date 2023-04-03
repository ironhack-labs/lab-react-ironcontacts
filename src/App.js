import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([...contactsData].slice(0, 5));

  const randomActor = () => {
    const filteredContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    const randomContact =
      filteredContacts[Math.floor(Math.random() * filteredContacts.length)];

    setContacts([...contacts, randomContact]);
    console.log("Added contact: " + randomContact.name);
  };

  const orderName = () => {
    const sortedByName = [...contacts].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setContacts(sortedByName);
  };

  const orderPopularity = () => {
    console.log("hello");
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={randomActor}>Add Random Contact</button>
      <button onClick={orderName}>Order by Name </button>
      <button onClick={orderPopularity}>Order by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar && <td>😎🏆</td>}
              {!contact.wonOscar && <td>-</td>}
              {contact.wonEmmy && <td>😎🏆</td>}
              {!contact.wonEmmy && <td>-</td>}
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
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
