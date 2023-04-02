import "./App.css"
import { useState } from "react"
import contacts from "./contacts.json"

export default function App() {
  const [thisContact, setContact] = useState(contacts.slice(0, 8))
  const [otherContacts, setOtherContact] = useState(contacts.slice(8))

  function addRandomContact() {
    const randomObj = Math.floor(Math.random() * otherContacts.length)
    const randomContact = otherContacts[randomObj]
    setContact((prevContact) => [...prevContact, randomContact])
    setOtherContact((prevContact) => prevContact.filter((contact) => contact))
  }

  function sortByName() {
    const sortedContacts = [...thisContact].sort((a, b) => a.name.localeCompare(b.name))
    setContact(sortedContacts)
  }

  let sortByPopularity = () => {
    const popularContacts = [...thisContact].sort((a, b) => b.popularity - a.popularity)
    setContact(popularContacts)
  }

  const deleteMovie = (contactId) => {
    const filteredContacts = [...thisContact].filter((contact) => {
      return contact.id !== contactId
    })

    setContact(filteredContacts)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <span>
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortByPopularity}>Most Popular</button>
        <button onClick={sortByName}>Name A-Z</button>
      </span>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {thisContact.map((contact) => (
              <tr
                className="card"
                key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <button
                  className="smallBtn"
                  onClick={() => deleteMovie(contact.id)}>
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
