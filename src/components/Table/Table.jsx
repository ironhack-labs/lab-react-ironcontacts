import React, { useState } from 'react'
import Contact from '../Contacts/Contact'
import contactsData from "../../contacts.json"

const contactsArray = contactsData.slice(0, 5)

function Table() {

  const [contacts, setContacts] = useState(contactsArray)

  function handleAddRandomContact(event) {
    const randomIndex = Math.floor(Math.random() * contactsData.length)
    const randomContact = contactsData[randomIndex]
    const uniqueContacts = new Set([randomContact, ...contacts])
    setContacts([...uniqueContacts])
  }

  return (
    <div>
      <h1 className="mt-3 mb-3 fw-bold">IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <table className="m-3">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>{new Set(contacts.map(contact => <Contact contact={contact} key={contact.id} />))}</tbody>
      </table>
    </div>
  )
}

export default Table