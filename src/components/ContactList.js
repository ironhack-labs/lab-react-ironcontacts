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
      setContacts((prev) => [
        ...prev,
        randomContact
      ])
    }
  }

  return (
    <div className='container'>
      <button className='btn btn-primary mb-3' onClick={handleAddContact}>Add random contact</button>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => <ContactItem contact={contact} key={contact.id}/>)}
        </tbody>
      </table>
    </div>
  )
}
