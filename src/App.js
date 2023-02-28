import './index'
import React, { useState } from 'react'
import contactsDB from './contacts.json'
// import Container from '../src/components/Container'

const App = () => {
  const [contacts] = useState(contactsDB.slice(0, 5))

  return (
    <section>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>popularity</h2>
            </th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>
                  <p>{Math.floor(contact.popularity * 100) / 100}</p>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </section>
  )
}

export default App
