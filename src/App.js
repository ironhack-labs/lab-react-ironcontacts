import { useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contactsJson.slice(5))

  const handleAddRandomContact = () => {
    const numRemainingContacts = remainingContacts.length
    if (numRemainingContacts === 0){
      return
    }
    const randomIndex = Math.floor(Math.random() * numRemainingContacts)
    setContacts(prevContacts => {
      const newContacts = [...prevContacts]
      newContacts.push(remainingContacts[randomIndex])
      return newContacts
    })
    setRemainingContacts(prevRemainingContacts => {
      const newRemainingContacts = [...prevRemainingContacts]
      newRemainingContacts.splice(randomIndex, 1)
      return newRemainingContacts
    })
  }

  const handleSortByPopularity = () => {
    console.log("sorting by popularity............................");
    setContacts(prevContacts => {
      const sortedByPopularity = [...prevContacts]
      console.log(sortedByPopularity);
      sortedByPopularity.sort((a, b) => {
        return b.popularity - a.popularity
      })
      console.log(sortedByPopularity);
      return sortedByPopularity
    })
  }

  const handleSortByName = () => {
    setContacts(prevContacts => {
      const sortedByName = [...prevContacts]
      sortedByName.sort((a, b) => {
        const aLower = a.name.toLowerCase().split(" ").pop()
        const bLower = b.name.toLowerCase().split(" ").pop()
        if (aLower > bLower){
          return 1
        } else if (aLower < bLower) {
          return -1
        } else {
          return 0
        }
      })
      return sortedByName
    })
  }

  const handleDeleteContact = contactId => {
    setContacts(prevContacts => {
      const filteredContacts = prevContacts.filter(contact => contact.id !== contactId)
      return filteredContacts
    })
  }

  return (<div className="App">
    <h1>IronContacts</h1>

    <button onClick={handleAddRandomContact}>Add random contact</button>
    <button onClick={handleSortByName}>Sort by LAST name (notice that? :))</button>
    <button onClick={handleSortByPopularity}>Sort by popularity</button>

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
        {contacts.map(contact => {
          return (<tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name} /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "🏆" : ""}</td>
            <td><button className="delete" onClick={() => {handleDeleteContact(contact.id)}}>Delete</button></td>
          </tr>)
        })}
      </tbody>

    </table>
  </div>);
}
export default App;