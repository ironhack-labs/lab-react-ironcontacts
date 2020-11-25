import React, { useState } from 'react'
import Contact from './Contact'
import contactsJSON from '../contacts.json';

function ContactList() {
  const [contacts, setContacts] = useState(contactsJSON.filter((elm, index) => index < 5))

  function addRandomContact() {
    const random = Math.floor(Math.random() * contactsJSON.length+1);
    contacts.push(contactsJSON[random])
    setContacts(contacts)
    console.log(contacts)
  }

  return(<div>
  <button onClick={addRandomContact}>Add Random Contact</button>
  <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
    </tr>
    {contacts.map(contact => <Contact
      key={contact.id}
      {...contact}
    />)}
  </table>
  </div>)
}

export default ContactList