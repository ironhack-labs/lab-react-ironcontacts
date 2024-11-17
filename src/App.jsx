import React, { useState } from 'react'
import contacts from './contacts.json'
import './app.css'
function App () {
  const [displayedContacts, setDisplayedContacts] = useState(
    contacts.slice(0, 5)
  )

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      contact => !displayedContacts.includes(contact)
    )
    if (remainingContacts.length === 0) return

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
    setDisplayedContacts([...displayedContacts, randomContact])
  }

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    setDisplayedContacts(sortedContacts)
  }

  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort(
      (a, b) => b.popularity - a.popularity
    )
    setDisplayedContacts(sortedContacts)
  }

  const deleteContact = id => {
    const updatedContacts = displayedContacts.filter(
      contact => contact.id !== id
    )
    setDisplayedContacts(updatedContacts)
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table border='1'>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: '50px' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
