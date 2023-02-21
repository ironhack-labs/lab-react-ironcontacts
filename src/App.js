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

  const sortAlphabetically = () =>{
    let sortContact = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortContact);
  }

  const sortPopularity = () =>{
    let sortContactP = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortContactP);
  }
 



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
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => {
          return (
            <tr>
              <th>
                <img src={contact.pictureUrl} alt="" />
              </th>
              <th>{contact.name}</th>
              <th>{contact.popularity}</th>
              <th>{contact.wonOscar ? "🏆" : null}</th>
              <th>{contact.wonEmmy ? "🏆" : null}</th>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
