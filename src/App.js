import "./App.css";
import React, { useState } from "react";
import contactsDataJSON from "./contacts.json";

function App() {
  let fiveFirstContacts = contactsDataJSON.slice(0, 5);
  const [contacts, setContacts] = useState(fiveFirstContacts);

  const addRandomContact = () => {
    const notDisplayedContacts = contactsDataJSON.filter(
      (item) => !contacts.includes(item)
    );
    const randomContact =
      notDisplayedContacts[
        Math.floor(Math.random() * notDisplayedContacts.length)
      ];

    setContacts([...contacts, randomContact]);
  };

  const sortAlphabetically = () => {
    let sortContact = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortContact);
  };

  const sortPopularity = () => {
    let sortContactP = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortContactP);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <button className="button" onClick={addRandomContact}>
        Add Contact
      </button>
      <button className="button" onClick={sortAlphabetically}>
        Sort Alphabetically
      </button>
      <button className="button" onClick={sortPopularity}>
        Sort after Popularity
      </button>
      <table data-table-theme="dark zebra">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Have won an Oscar</th>
            <th>Have won an Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th>
                  <img src={contact.pictureUrl} alt="" />
                </th>
                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
                <th className="bigger">{contact.wonOscar ? "🏆" : null}</th>
                <th className="bigger">{contact.wonEmmy ? "🏆" : null}</th>
                <th>
                  <button onClick={() => deleteContact(contact.id)} className="delete-btn">
                    <span>Delete</span>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
