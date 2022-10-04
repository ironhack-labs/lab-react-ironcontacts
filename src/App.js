import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";
import ContactsList from "./components/ContactsList";

function App() {
  const firstFiveContacts = contacts.slice(0, 5);
  const [contactsArray, setContactsArray] = useState(firstFiveContacts);

  function getRandomContact(array) {
    return array[
      Math.floor(
        Math.random() * (contacts.length - contactsArray.length) +
          contactsArray.length
      )
    ];
  }

  function sortContactsByName(array) {
    array.sort(function (a, b) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }

  function sortContactsByPopularity(array) {
    array.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
  }

  const deleteContact = (id) => {
    const newArray = contactsArray.filter((element) => {
      console.log(element.id !== id);
      return element.id !== id;
    });
    setContactsArray([...newArray]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        className="add-contact-btn"
        onClick={() => {
          setContactsArray([...contactsArray, getRandomContact(contacts)]);
        }}
      >
        Add Random Contact
      </button>
      <button
        className="add-contact-btn"
        onClick={() => {
          sortContactsByName(contactsArray);
          setContactsArray([...contactsArray]);
        }}
      >
        Sort by Name
      </button>
      <button
        className="add-contact-btn"
        onClick={() => {
          sortContactsByPopularity(contactsArray);
          setContactsArray([...contactsArray]);
        }}
      >
        Sort by Popularity
      </button>
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
        {contactsArray.map((element) => {
          return (
            <ContactsList
              key={element.id}
              contacts={element}
              delete={deleteContact}
            />
          );
        })}
      </table>
    </div>
  );
}

export default App;
