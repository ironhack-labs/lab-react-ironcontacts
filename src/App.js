import './App.css';
import contactsData from "./contacts.json"
import { useState } from "react"

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 10))
  const [allContacts, setAllContacts] = useState(contactsData)

  //console.log(allContacts)
  //console.log(contacts)

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * allContacts.length);
    const randomContact = allContacts[randomIndex];

    const isDuplicateContact = contacts.some(contact => contact.id === randomContact.id);
    console.log(isDuplicateContact)
    if (!isDuplicateContact) {
    const updatedContacts = [...contacts, randomContact];

    setContacts(updatedContacts);
  }
}

  const sortByPopularity = () => {
    const sortedByPopularity = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedByPopularity)
  }
  
  const sortByName = () => {
    const sortedByName = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortedByName)
  }

  const deleteButton = (contactId) => {
    const updatedContacts = [...contacts].filter(contact => {
      return contact.id !== contactId;
    }) 
    setContacts(updatedContacts)
    }

  return (
  <div className="App">
  <h1>IronContacts</h1>
  <div className="top-buttons">
    <button onClick={addRandomContact} className="just-button">Add Random Contact</button>
    <button onClick={sortByName} className="just-button">Sort by name</button>
    <button onClick={sortByPopularity} className="just-button">Sort by popularity</button>
  </div>
  <table> 
    <thead>
      <tr className="top-head">
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { contacts.map((contact) => {
        return (
        <tr key={contact.id} className="bottom-body">
          <td><img src={contact.pictureUrl} alt={contact.name}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar ? '🏆' : ':('}</td>
          <td>{contact.wonEmmy ? '🏆' : ':('}</td>
          <td>
          <button onClick={() => deleteButton(contact.id)} className="delete-btn">Delete</button>
          </td>
        </tr>
        )
      })}
    </tbody>
  </table>
  </div>
  )
}


export default App





