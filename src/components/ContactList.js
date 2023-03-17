import React, { useState } from 'react'
import Contact from './Contact'
import contactsDB from '../contacts.json'

function ContactList() {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => <Contact {...contact} />)}
      </tbody>
    </table>
  )
}

export default ContactList