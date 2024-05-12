import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  // console.log(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    remainingContacts.length > 0
      ? setContacts((currentState) => [...currentState, randomContact])
      : "There are no contacts left";
  };

  const sortByPopularity = () => {
    let sortedArray = contacts.toSorted((a, b) => b.popularity - a.popularity);
    setContacts(() => sortedArray);
  };

  const sortByName = () => {
    let sortedArray = contacts.toSorted((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    );
    console.log(sortedArray);
    setContacts(() => sortedArray);
  };

  const clickToDelete = (contactId) => {
    let filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;      
    });
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

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
          {contacts.map((contact) => {
            return (
              <tr key={contact.id} className="contact-table">
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: "70px" }}
                  ></img>
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>{contact.wonOscar ? "🏆" : null}</td>
                <td>{contact.wonEmmy ? "🌟 " : null}</td>
                <td>
                  <button onClick={() => clickToDelete(contact.id)}>
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
