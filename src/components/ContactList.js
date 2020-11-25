import React, { useState } from 'react'
import Contact from './Contact'
import contactsJSON from '../contacts.json';

function ContactList() {
  const [contacts, setContacts] = useState(contactsJSON.filter((elm, index) => index < 5))

  function addRandomContact() {
    const random = Math.floor(Math.random() * contactsJSON.length+1);
    const newContact = [...contacts]
    newContact.push(contactsJSON[random])
    setContacts(newContact)
  }

  function sortByName() {
    const sortArr = [...contacts].sort((a,b) => (a.name > b.name) ? 1 : -1)
    setContacts(sortArr)
  }

  function sortByPopularity() {
    const sortArr = [...contacts].sort((a,b) => (a.popularity > b.popularity) ? -1 : 1)
    setContacts(sortArr)
  }

  const deleteContact = id => setContacts(
    contacts.filter(el => el.id !== id))

  return(<div>
  <button onClick={addRandomContact}>Add Random Contact</button>
  <button onClick={sortByName}>Sort by Name</button>
  <button onClick={sortByPopularity}>Sort by Popularity</button>
  <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
    </tr>
    {contacts.map(contact => <Contact
      key={contact.id}
      {...contact}
      handleDelete={() => deleteContact(contact.id)}
    />)}
  </table>
  </div>)
}

export default ContactList