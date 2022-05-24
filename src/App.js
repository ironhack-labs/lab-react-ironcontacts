import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const randomContact = () => {
    /* contactsData(Math.floor(Math.random() * (4 + (contactsData.length - 1)))) */
    let random =
      contactsData[Math.floor(Math.random() * (4 + (contactsData.length - 1)))];
    setContacts([random, ...contacts]);
  };

  const sortAlphabetically = () => {
    const sorted = contacts.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setContacts([...sorted]);
  };

  const sortedPop = () => {
    const sorted = contacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContacts([...sorted]);
  };

  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter(contact => {
      return contact.id !== contactId
    })
    setContacts([...filteredContact])
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr><h1>IronContacts</h1></tr>
          <tr>
            <td>
              <button onClick={randomContact}>Add Random Contact</button>
            </td>
            <td>
              <button onClick={sortAlphabetically}>Sort Alphabetically</button>
            </td>
            <td>
              <button onClick={sortedPop}>Sort by Popularity</button>
            </td>
          </tr>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
            <th>
              <h2>Won an Oscar</h2>
            </th>
            <th>
              <h2>Won an Emmy</h2>
            </th>
          </tr>
        </thead>

        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img width="100" src={contact.pictureUrl} alt="Celeb" />
              </td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity)}</td>
              <td> {contact.wonOscar ? "🏆" : ""}</td>
              <td> {contact.wonEmmy ? "🏆" : ""} </td>
              <td><button onClick={ () => deleteContact(contact.id)} key={contact.id}>Delete</button></td>
            </tr>
       
          );
        })}
      </table>
    </div>
  );
}

export default App;
