import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5))

  const [restOfContacts, setRestOfContacts] = useState(contactsData.slice(5))

  function addRandomContact() {
    const i = Math.floor(Math.random() * restOfContacts.length)
    setContacts([...contacts, restOfContacts[i]])

    const newRest = [...restOfContacts]
    newRest.splice(i, 1)
    console.log(newRest)
    setRestOfContacts(newRest)
  }

  function orderPopularity() {
    const sorted = contacts.slice().sort((a, b) => a.popularity < b.popularity)
    setContacts(sorted)
  }

  function orderAlphabetically() {
    const sorted = contacts.slice().sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sorted)
  }

  return <div className="App">

  <h1>IronContacts</h1>

  <div id="buttonDiv">
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={orderPopularity}>Sort by popularity</button>
    <button onClick={orderAlphabetically}>Sort by name</button>
  </div>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      {contacts.map(contact => {
        return (
          <tbody key={contact.id}>
            <tr>
              <td><img src={contact.pictureUrl} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar && <td>🏆</td>}
              {contact.wonEmmy && <td>🏆</td>}
            </tr>
          </tbody>
        )
      })}
    </table>

  </div>;
}
export default App;