import React, { useState } from "react";

import ContactsTable from "./components/ContactsTable/ContactsTable";

import contacts from "./contacts.json";

import "./App.css";

function App() {
  const [contactList, setContatctList] = useState(contacts.slice(0, 5));

  const handleAddContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];

    const checkIfExists = contactList.find((o, i) => {
      if (newContact.id === o.id) {
        return true;
      }
      return false;
    });

    if (checkIfExists === undefined) {
      setContatctList([...contactList, newContact]);
    }
  };

  const handleSortByName = () => {
    const sortedContacts = contactList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContatctList([...contactList], sortedContacts);
  };

  const handleSortByPopularity = () => {
    const sortedContacts = contactList.sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setContatctList([...contactList], sortedContacts);
  };

  const handleDeleteContact = (id) => {
    const toDeleteIndex = contactList.filter((contact) => contact.id !== id);

    setContatctList(toDeleteIndex);
  };
  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <div className="btn-area">
        <button onClick={() => handleAddContact()} className="addContact">
          Add Contact
        </button>

        <button onClick={() => handleSortByName()} className="addContact">
          Sorty By Name
        </button>

        <button onClick={() => handleSortByPopularity()} className="addContact">
          Sort By Popularity
        </button>
      </div>
      <ContactsTable deleteCt={handleDeleteContact} contacts={contactList} />
    </div>
  );
}

export default App;
