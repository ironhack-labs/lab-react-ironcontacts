import "./App.css";
import contacts from './contacts.json'
import { useState } from 'react'

function App() {

  let allContactsList = [...contacts]
  let InitialContactList = allContactsList.slice(0, 5)


  const [actors, setActors] = useState(InitialContactList)


  function contactRow(contact) {
    let hasWonOscar = contact.wonOscar ? '🏆' : ''
    let hasWonEmmy = contact.wonEmmy ? '🌟' : ''
    let popularityValue = Math.round(contact.popularity * 100) / 100

    return (
      <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt={contact.name} height="75"/></td>
        <td>{contact.name}</td>
        <td>{popularityValue}</td>
        <td>{hasWonOscar}</td>
        <td>{hasWonEmmy}</td>
        <td><button onClick={() => {deleteContact(contact.id)}}>Delete</button></td>
      </tr>
    )
  }

  function addRandomContact () {
    let displayedContactsIds = actors.map((contact) => {
      return (
        contact.id
      )
    })

    let remainingContacts = allContactsList.filter((contact) => {
      return (
        !displayedContactsIds.includes(contact.id)
      )
    })

    let randomContactIndex = Math.floor(Math.random() * remainingContacts.length)
    let randomContact = remainingContacts[randomContactIndex]

    setActors((prevActors) => {return ([...prevActors, randomContact])})

  }

  function sortByName() {
    let copiedContacts = [...actors]
    copiedContacts.sort((a,b) => {
      return a.name.localeCompare(b.name)
    })
    setActors(copiedContacts)
  }

  function sortByPopularity() {
    let copiedContacts = [...actors]
    copiedContacts.sort((a,b) => {
      return b.popularity - a.popularity
    })
    setActors(copiedContacts)
  }

  function deleteContact(contactId) {
    let newContactList = actors.filter((contact) => {
      return contact.id !== contactId
    })
    setActors(newContactList)
  }
 
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={() => {sortByName()}}>Sort by Name</button>
      <button onClick={() => {sortByPopularity()}}>Sort by Popularity</button>
      <table>
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
          {actors.map(contactRow)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
