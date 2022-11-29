import "./App.css"
import contacts from "./contacts.json"
import { useState } from "react"

function App() {

  const contactCopy = [...contacts]
  const contactArray = contactCopy.slice(0, 5)
  const [fiveContacts, setfiveContacts] = useState(contactArray)
  console.log(fiveContacts)

  const addContact = () => {
    const randomContact = (Math.floor(Math.random() * contacts.length))
    const fiveContactsCopy = [...fiveContacts]
    fiveContactsCopy.push(contacts[randomContact])
    setfiveContacts(fiveContactsCopy)
  }

  const removeContact = idToDelete => {
    const filteredContact = contacts.filter(elm => elm.id != idToDelete)

    setfiveContacts(filteredContact)
  }

  return (
    <div>
      <button onClick={addContact}>AÑADIR CONTACTO</button>
      <table key={contactArray.id}>
        <thead>Iron Contacts
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map(elm => {
            return (<tr key={elm.id}>
              <td><img src={elm.pictureUrl}></img></td>
              <td>{elm.name}</td>
              <td>{elm.popularity}</td>
              <td>{elm.wonOscar ? <p>🏆</p> : <p> </p>}</td>
              <td>{elm.wonEmmy ? <p>🏆</p> : <p> </p>}</td>
              <td><button onClick={() => removeContact(elm.id)}>ELIMINAR CONTACTO</button></td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>

  )
}

export default App



