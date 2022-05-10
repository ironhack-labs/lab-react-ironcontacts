import "./App.css"
import { useState } from "react"
import contactsArr from "./contacts.json"

function App() {
  let fiveContacts = contactsArr.splice(0, 5)
  const remainingContacts = contactsArr.slice(6, contactsArr.length)
  const randomCeleb =
    remainingContacts[Math.floor(Math.random() * remainingContacts.length)]
  const [contacts, setContacts] = useState(fiveContacts)

  const randomPicker = () => {
    const newList = [...contacts, randomCeleb];
    setContacts(newList)
  }

  const alphabeticallySort = () => {
    const updatedAlphaList = [
      ...contacts.sort((x, y) => x.name.localeCompare(y.name)),
    ]
    setContacts(updatedAlphaList)
  }

  const popularitySort = () => {
    const updatedPopuList = [
      ...contacts.sort((x, y) => {
        if (x.popularity > y.popularity) {
          return -1
        } else if (x.popularity < y.popularity) {
          return 1
        } else {
          return 0
        }
      })
    ]
    setContacts(updatedPopuList);
  }

  const removeContact = (i) => {
    const arrayContact = [...contacts];
    const contactId = i.target.getAttribute("name");
    setContacts(arrayContact.filter((contact) => contact.id !== contactId));
  }

  return (
    <div className="App">
      <button onClick={randomPicker}>Add Contact</button>
      <button onClick={alphabeticallySort}>Sort Alphabetically</button>
      <button onClick={popularitySort}>Sort Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>

        {contacts.map((i) => {
          const dltContacts = (idOfContact) => {}
          return (
            <tr>
              <td>
                <img src={i.pictureUrl} alt="" />
              </td>
              <td>{i.name}</td>
              <td>{i.popularity}</td>
              <td>{i.wonOscar ? "🏆" : ""}</td>
              <td>{i.wonEmmy ? "🏆" : ""}</td>
              <button name={i.id} onClick={removeContact}>
                Delete
              </button>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default App