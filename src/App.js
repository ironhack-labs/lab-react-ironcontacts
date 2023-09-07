import { useState } from 'react'
import './App.css'
import originalContacts from './contacts.json'

function App() {
  const firstFive = originalContacts.slice(0, 50)
  const [contacts, setContacts] = useState(firstFive)

  const addRandomContact = () => {
    const remainingContacts = originalContacts.filter(contact => !contacts.includes(contact))
    if (remainingContacts.length === 0) {
      return
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts[randomIndex]

    setContacts([randomContact, ...contacts])
  }

  const sortByName = () => {
    const copy = [...contacts]
    copy.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    })

    setContacts(copy)
  }

  const sortByPopulatiry = () => {
    setContacts(previousContacts => {
      const copy = [...previousContacts]
      copy.sort((a, b) => b.popularity - a.popularity)

      return copy
    })
  }

  const deleteContact = id => {
    const remainingContacts = contacts.filter(contact => contact.id !== id)

    setContacts(remainingContacts)
  }

  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopulatiry}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toPrecision(4)} </td>
              <td>{contact.wonOscar && '🏆'}</td>
              <td>{contact.wonEmmy ? '🏆' : null}</td>
              <td>
                <button
                  onClick={() => {
                    deleteContact(contact.id)
                  }}
                >
                  Delete contact
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