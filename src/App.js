import './index'
import React, { useState } from 'react'
import contactsDB from './contacts.json'
const unusedContacts = contactsDB.slice(5)

const App = () => {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))
  const handleAddContact = () => {
    if (unusedContacts.length === 0) return

    const randomContact = unusedContacts.splice(
      Math.floor(Math.random() * unusedContacts.length),
      1
    )[0] //もしも[0]が無かったらrandomContactは[{…}]なのでそのままアクセスできない

    // console.log(randomContact)
    const copy = [...contacts]
    copy.push(randomContact)
    setContacts(copy)
  }
  const handleSortPopularity = () => {
    const copy = [...contacts]
    copy.sort((a, b) => b.popularity - a.popularity)
    setContacts(copy)
  }
  const handleSortName = (contact) => {
    const copy = [...contacts]
    copy.sort((a, b) => {
      a = a.name.toLowerCase()
      b = b.name.toLowerCase()
      if (a < b) {
        return -1
      } else if (a > b) {
        return 1
      }
      return 0
    })
    setContacts(copy)
  }

  const handleDelete = (id) => {
    const newList = contacts.filter((contact) => contact.id !== id)
    setContacts(newList)
  }

  return (
    <section>
      <div className="container">
        <div className="title">
          <h1>IronContacts</h1>
          <div className="button">
            <button onClick={handleAddContact}>Add id Contact</button>
            <button onClick={handleSortPopularity}>Sort by popularity</button>
            <button onClick={handleSortName}>Sort by name</button>
          </div>
        </div>

        <table>
          <thead>
            <tr class="tr">
              <th>
                <h2>Picture</h2>
              </th>
              <th>
                <h2>Name</h2>
              </th>
              <th>
                <h2>Popularity</h2>
              </th>
              <th>
                <h2>Won Oscar</h2>
              </th>
              <th>
                <h2>Won Emmy</h2>
              </th>
              <th>
                <h2>Actions</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <div class="scroll">
              {contacts.map((contact) => {
                return (
                  // deleteボタンの直前の親につける
                  <tr key={contact.id} class="tr2">
                    <td>
                      <img src={contact.pictureUrl} alt={contact.name} />
                    </td>
                    <td>{contact.name}</td>
                    <td>{Math.floor(contact.popularity * 100) / 100}</td>
                    <td>{contact.wonOscar && '🏆'}</td>
                    <td>{contact.wonEmmy && '🏆'}</td>
                    <td class="btn-delete">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        type="button"
                        class="btn btn-danger"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                )
              })}
            </div>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default App
