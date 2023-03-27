import React from "react";
import { useState } from "react";
import contactsJson from "../contacts.json";
import Contact from "./Contact";

function ContactsList() {
  const [contacts, setContacts] = useState(contactsJson.slice(0, 15));
  const handleAddRandomContact = () => {
    if (contacts.length !== 0) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      setContacts([...new Set([contacts[randomIndex], ...contacts])]);
      contacts.splice(randomIndex, 1);
    } else {
      return;
    }
  };

  const handleContactDelete = (contact) => {
    setContacts((prevs) => {
      return prevs.filter((prev) => prev.id !== contact.id);
    });
  };

  const handleSortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };

  const handleSortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <div>
      <h1 className="display-1 m-4 mb-4 d-flex justify-content-center fw-bold">
        IronConstats
      </h1>

      <div className="d-flex justify-content-center">
        <button className="btn btn-dark m-4" onClick={handleAddRandomContact}>
          Add random contact
        </button>
        <button
          className="btn btn-dark
           m-4"
          onClick={handleSortByPopularity}
        >
          Sort by Popularity
        </button>
        <button
          className="btn btn-dark
         m-4"
          onClick={handleSortByName}
        >
          Sort by Name
        </button>
      </div>

      <table className="table m-2">
        <thead>
          <tr>
            <th scope="col m-3"></th>
            <th scope="col m-3">Picture</th>
            <th scope="col m-3">Name</th>
            <th scope="col m-3">Popularity</th>
            <th scope="col m-3">
              Won <br />
              Oscar
            </th>
            <th scope="col m-3">
              Won <br />
              Emmy
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              onClikDelete={() => handleContactDelete(contact)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsList;
