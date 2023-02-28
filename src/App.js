import './index'
import React, { useState } from 'react'
import contactsDB from './contacts.json'
// import Container from '../src/components/Container'

const App = () => {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))
  const handleAddContact = () => {
    const randomContact =
      contactsDB[Math.floor(Math.random() * contactsDB.length)]
    const copy = [...contacts]
    copy.push(randomContact)
    setContacts(copy)
  }
  return (
    <section>
      <div class="title">
        <h1>IronContacts</h1>
        <button onClick={handleAddContact}>Add Random Contact</button>
      </div>
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
            <th>
              <h2>Won Oscar</h2>
            </th>
            <th>
              <h2>Won Emmy</h2>
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
                <td>
                  <p>{contact.wonOscar && '🏆'}</p>
                </td>
                <td>
                  <p>{contact.wonEmmy && '🏆'}</p>
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
