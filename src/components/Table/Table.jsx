import React from 'react'
import Contact from '../Contacts/Contact'
import contacts from "../../contacts.json"

const contactsArray = contacts.slice(0, 10)

function Table() {
  return (
    <div>
      <h1 className="mt-3 mb-3 fw-bold">IronContacts</h1>
      <table className="">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>{contactsArray.map(contact => <Contact contact={contact} key={contact.id}/> )}</tbody>
      </table>
    </div>
  )
}

export default Table