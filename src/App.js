import './App.css';
import contactsArray from './contacts.json'
import { useState } from "react"

function App() {

  const contactsList = contactsArray.slice(0, 5);
  const [contacts, setContacts] = useState(contactsList)

  const remainingContacts = contactsArray.slice(5);

  const addRandomContact = () => {
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
    const copy = [...contacts]
    copy.push(randomContact)
    setContacts(copy)
  }

  const sortByPopularity = () => {
    const copy = [...contacts]
    copy.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
    setContacts(copy)
  }

  const sortByName = () => {
    const copy = [...contacts]
    copy.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(copy)
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const newList = prevContacts.filter(element => {
        return element.id !== contactId;
      })
      return newList;
    })
  }

  return (
    <div className='App'>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table className="table">
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <>
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl}></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar && "🏆"}</td>
                  <td>{contact.wonEmmy && "🏆"}</td>
                  <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                </tr>
              </>
            );
          })
          }
        </tbody>
      </table>
    </div>
  )

}

export default App;
