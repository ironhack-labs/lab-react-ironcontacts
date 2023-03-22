import React from 'react'
import Contact from '../Contacts/Contact'
import contacts from "../../contacts.json"

const contactsArray = contacts.slice(0, 5)

function Table() {
  return (
    <div>
      <h1 className="mt-3 fs-bold">IronContacts</h1>
      <table className="">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{contactsArray.map(contact => <Contact contact={contact} key={contact.id}/> )}</tbody>
      </table>
    </div>
  )
}

export default Table