import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  //const [contact, setContact] = useState(contactsList);
  let tmpContacts = [];
  for (let i = 0; i < 5; i++) {
    tmpContacts.push(contacts[i]);
  }
  const [contactsList, setContactList] = useState(tmpContacts);

  function addRandomContact() {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let i = 0;
    while (i < contactsList.length) {
      if (contacts[randomIndex] !== contactsList[i]) {
        i++;
      } else {
        i = 0;
        randomIndex = Math.floor(Math.random() * contacts.length);
      }
    }
    setContactList([...contactsList, contacts[randomIndex]]);
  }

  function sortByName() {
    const sortedListName = [...contactsList].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setContactList(sortedListName);
  }

  function sortByPopularity() {
    const sortedListPopularity = [...contactsList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedListPopularity);
  }

  function removeContact(id) {
    const deletedContact = [...contactsList].filter((contact) => {
      return contact.id !== id;
    });
    setContactList(deletedContact);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={() => {
          addRandomContact();
        }}
        className="btn-addRandomContact"
      >
        Add Random Contact
      </button>
      <button
        onClick={() => {
          sortByName();
        }}
        className="btn-sortByName"
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          sortByPopularity();
        }}
        className="btn-sortByPopularity"
      >
        Sort by Popularity
      </button>

      <table>
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((element) => {
            return (
              <tr key={element.id}>
                <th>
                  <img src={element.pictureUrl} alt="contact_picture"></img>
                </th>
                <th>{element.name}</th>
                <th>{element.popularity}</th>
                <th>{element.wonOscar ? "🏆" : ""}</th>
                <th>{element.wonEmmy}</th>
                <th>
                  <button
                    onClick={() => {
                      removeContact(element.id);
                    }}
                    className="btn-delete"
                  >
                    Delete
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
