import './App.css'
import contacts from "../contacts.json"
import { useState } from 'react'

function App() {

  const contactsFive = contacts.slice(0, 5)
  const [contactsArray, setContactsArray] = useState(contactsFive)

  const addContact = () => {

    const newContact = contacts[Math.floor(Math.random() * contacts.length)]

    const shownArray = [...contactsArray]

    if (!shownArray.some(ele => ele.id === newContact.id)) {
      shownArray.unshift(newContact)
      setContactsArray(shownArray)
    } else { addContact() }

  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="button-list">
        <button onClick={addContact}>Add New</button>
      </div>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {
          contactsArray.map(({ id, pictureUrl, name, popularity, wonOscar, wonEmmy }) => {
            return (
              <tr key={id}>
                <th> <img src={pictureUrl} alt={name} /></th>
                <th>{name}</th>
                <th>{popularity}</th>
                <th>{wonOscar ? '🏆' : undefined}</th>
                <th>{wonEmmy ? '🏆' : undefined}</th>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}


export default App