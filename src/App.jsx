import "./App.css";
import contactsData from "./contacts.json"
import { useState } from "react"

const allContacts = contactsData
//console.log(allContacts)

function App() {
  const [displayedContacts, setDisplayedContacts] = useState(allContacts.slice(0, 5))

  function contactList() {

    return (
      <table className="ContactTable">
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
        <tbody>{displayedContacts.map(contact => {
          return (
            <tr key={contact.id} className="contactRow">
              <td><img src={contact.pictureUrl} alt={contact.name} width={80} /></td>
              <td>{contact.name} </td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🌟"}</td>
              <td><button onClick={()=>handleDelete(contact.id)}>Delete</button></td>
            </tr>
          )
        })}</tbody>
      </table>
    )
  }

  function handleDelete(contactId) {
      const updatedContacts = displayedContacts.filter(contact => contact.id != contactId)
    setDisplayedContacts(updatedContacts);
  }

  function handleClick() {

    let randomContact;

    if (displayedContacts.length >= allContacts.length) {
      return;
    }

    while (!randomContact || displayedContacts.some(c => c.id === randomContact.id)) {
      const randomIndex = Math.floor(Math.random() * (allContacts.length - 5)) + 5;
      randomContact = allContacts[randomIndex]
    }
    setDisplayedContacts([...displayedContacts, randomContact]);

  }

  function handleSortName() {
    const sortByName = [...displayedContacts].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    setDisplayedContacts(sortByName)

  }

  function handleSortPop() {
    const sortByPopularity = [...displayedContacts].sort((a, b) => {
      return b.popularity - a.popularity
    })

    setDisplayedContacts(sortByPopularity)
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleClick}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by name</button>
      <button onClick={handleSortPop}>Sort by popularity</button>

      {contactList()}
    </div>)
}

export default App;
