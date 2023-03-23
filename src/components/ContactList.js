import React, { useState } from 'react'
import contactsDB from '../contacts.json'
import ContactItem from './ContactItem';

export default function ContactList() {
  const firstContacts = contactsDB.slice(5, 10);

  console.log(contactsDB);

  const [contacts, setContacts] = useState(firstContacts);

  const handleAddContact = () => {
    let randomContact = contactsDB[Math.floor(Math.random() * contactsDB.length)];

    if (!contacts.includes(randomContact)) {
      setContacts((prev) => [...prev, randomContact]);
    }
  }

  const handleSortByName = () => {
    setContacts(prev => [...prev.sort((a, b) => a.name.localeCompare(b.name))]);
  }

  const handleSortByPopularity = () => {
    setContacts(prev => [...prev.sort((a, b) => b.popularity - a.popularity)]);
  }

  const handleDeleteContact = (currentContact) => {
    setContacts(prev => [...prev.filter(contact => contact !== currentContact)])
  }

  return (
    <div className='container'>
      <div className='d-flex flex-row flex-wrap justify-content-center gap-3'>
      <button className='btn btn-primary mb-3' onClick={handleAddContact}>Add random contact</button>
      <button className='btn btn-primary mb-3' onClick={handleSortByName}>Sort by name</button>
      <button className='btn btn-primary mb-3' onClick={handleSortByPopularity}>Sort by popularity</button>
      </div>
      <table className='table align-middle'>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => <ContactItem contact={contact} key={contact.id} onDeleteContact={() => handleDeleteContact(contact)}/>)}
        </tbody>
      </table>
    </div>
  )
}
