import { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json"

function App() {
  const firstFive = contactsList.slice(0,5)
  const [ contacts, setContacts ] = useState(firstFive)

  function addRandomContact() {
    const remainingContacts = contactsList.filter(contact => !contacts.includes(contact))
    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const newContact = remainingContacts[randomIndex]
    const updatedList = contacts.concat(newContact)
    setContacts(updatedList)
  }

  function sortByPopularity() {
    const updatedList = contacts.toSorted((a,b) => b.popularity - a.popularity)
    setContacts(updatedList)
  }

  function sortByName() {
    const updatedList = contacts.toSorted((a, b) => a.name.localeCompare(b.name));
    setContacts(updatedList)
  }

  function deleteContact(contact) {
    const updatedList = contacts.filter(c => c.name != contact.name)
    setContacts(updatedList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
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
          {contacts.map(contact => {
            return(
              <tr>
                <td className="pic"><img src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🌟"}</td>
                <td><button onClick={() => deleteContact(contact)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
