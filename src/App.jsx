import contacts from "./contacts.json";
import './App.css';
import { useState } from "react";

function App() {

  const fiveContacts = contacts.slice(0, 5)
  const [contactList, setContacts] = useState(fiveContacts)

  const nameSort = () => {
    const contactsCopy = [...contactList]
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(contactsCopy)
  }

  const popularitySort = () => {
    const contactsCopy = [...contactList]
    contactsCopy.sort((a, b) => b.popularity - a.popularity)
    setContacts(contactsCopy)
  }

  const addRandomContact = () => {

    const RandomContact = contacts[Math.floor(Math.random() * contacts.length)]
    const contactsCopy = [...contactList]
    contactsCopy.push(RandomContact)
    setContacts(contactsCopy)
  }
  const deleteContact = idToDelete => {
    const lastContactList = contactList.filter(elm => elm.id != idToDelete)
    setContacts(lastContactList)
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={popularitySort}>Sort By Popularity</button>
      <button onClick={nameSort}>Sort By Name</button>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Actions</td>
          </tr>

        </thead>
        <tbody>
          {
            contactList.map(elm => {
              const { name, pictureUrl, popularity, wonOscar, id, wonEmmy } = elm

              return (
                <tr key={elm}>
                  <td><img src={pictureUrl} alt="" /></td>
                  <td>{name}</td>
                  <td>{Math.floor(popularity)}</td>
                  {wonOscar && <td>🏆</td>}
                  {wonEmmy && <td>🏆</td>}
                  <td><button onClick={() => deleteContact(id)}>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>


      </table>
    </div>
  )
}

export default App;
