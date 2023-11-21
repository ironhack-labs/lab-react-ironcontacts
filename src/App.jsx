import "./App.css"
import contactsData from './contacts.json'
import { useState } from "react"

function App() {
  let length = 5
  const [contacts, setContacts] = useState(contactsData.slice(0, length))

  const addContact = () => {
    length++
    let randomIndex = Math.floor(Math.random() * (contactsData.length - 0) + 0)
    const contactsCopy = [...contacts]
    while (contactsCopy.includes(contactsData[randomIndex])) {
      randomIndex = Math.floor(Math.random() * (contactsData.length - 0) + 0)
    }
    contactsCopy.push(contactsData[randomIndex])
    setContacts(contactsCopy)
  }

  const sortByPopularity = () => {
    const contactsCopy = [...contacts]
    contactsCopy.sort((contact1, contact2) => {
      if (contact1.popularity < contact2.popularity) {
        return 1;
      }
      if (contact1.popularity > contact2.popularity) {
        return -1;
      }
      return 0;
    })
    setContacts(contactsCopy)
  }

  const sortByName = () => {
    const contactsCopy = [...contacts]
    contactsCopy.sort((contact1, contact2) => {
      if (contact1.name > contact2.name) {
        return 1;
      }
      if (contact1.name < contact2.name) {
        return -1;
      }
      return 0;
    })
    setContacts(contactsCopy)
  }

  const removeContact = (toDeleteId) => {
    const contactsUpdated = contacts.filter(contact => contact.id !== toDeleteId)
    setContacts(contactsUpdated)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
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
          { contacts.map((contact, i) => {
            return(
              <tr key={ i }>
                <td><img src={ contact.pictureUrl } alt={ contact.name } /></td>
                <td>{ contact.name }</td>
                <td>{ contact.popularity }</td>
                <td>{ contact.wonOscar ? '🏆' : '' }</td>
                <td>{ contact.wonEmmy ? '🌟' : '' }</td>
                <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
