import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"

const contactsList = contacts.splice(0, 5)
const contactsListRandom = contacts.splice(6, 12)


function App() {

  const [contacts, setContacts] = useState(contactsList)

  const RandomContact = () => {
    const random = contactsListRandom[Math.floor(Math.random() * contactsListRandom.length)]
    const contactCopy = [...contacts]
    contactCopy.unshift(random)
    setContacts(contactCopy)
  }

  return (
    <div className="App">

      <h1>IronContacts</h1>

      {contacts.map((elm) => {
        return (
          <table>
            < tbody>
              <tr key={elm.id}>
                <th> < img src={elm.pictureUrl} /></th>
                <th> <p >{elm.name}</p></th>
                <th> <p >{elm.popularity}</p></th>
                <th>{elm.wonOscar ? <p>🏆 </p> : <p></p>}</th>
                <th> {elm.wonEmmy ? <p>🏆 </p> : <p></p>}</th>
              </tr>
            </tbody>
          </table>
        )
      })}
      <button onClick={RandomContact}>Random</button>
    </div >
  )

}
export default App;


