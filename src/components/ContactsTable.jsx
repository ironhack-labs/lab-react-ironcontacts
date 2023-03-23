import React from 'react';
import { useState } from 'react';
import contactsJson from '../contacts.json';
import Contact from './Contact';

const filteredContacts = contactsJson.map(contact => contact);

for (let i = 0; i < 5; i++) {
  filteredContacts.shift();
}

function ContactsTable() {
  const contactsArray = contactsJson.slice(0, 5);
  const [contacts, setContacts] = useState(contactsArray);

  function handleAddRandomContact() {
    if (filteredContacts.length !== 0) {
      const randomIndex = (Math.floor(Math.random() * filteredContacts.length));
      setContacts([...new Set([filteredContacts[randomIndex], ...contacts])]);
      filteredContacts.splice(randomIndex, 1);
    } else {
      return
    }
  }

  function handleSortByPopularity() {
    setContacts([...contacts].sort((a, b) => (b.popularity - a.popularity)));
  };

  function handleSortByName() {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  }

  const handleDeleteContact = (contact) => {
    setContacts((prev) => prev.filter(contactToDelete => contactToDelete.id !== contact.id))
    filteredContacts.push(contact);
  }

  return (
    <div>
      <h1 className="m-3 mb-3 fw-bold">IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <table className="m-3">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => <Contact contact={contact} key={contact.id} onClickDelete={(event) => handleDeleteContact(contact)} />)}
        </tbody>
      </table>
    </div >
  )
}

export default ContactsTable