// src/App.js
import "./App.css";
import { useState } from "react"
import contactsDataJSON from "./contacts.json"



function App() {


  let [contacts, setContacts] = useState(contactsDataJSON.slice(0,5))


  const addContact = (() => {
    contactsDataJSON.splice(0,5)

    let randomCon = contactsDataJSON.splice([Math.floor(Math.random() * contactsDataJSON.length)],1)
    console.log(randomCon)

    let newContacts = contacts.slice(0).concat(randomCon)

    setContacts(newContacts)
  })

  const sortByName = (()=>{
    let newContacts = contacts.slice(0)
    let newArr = newContacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(newArr)
    setContacts(newContacts)
  })

  const sortByPopularity = (()=>{
    let newContacts = contacts.slice(0)
    let newArr = newContacts.sort((a, b) => (b.popularity - a.popularity))
    console.log(newArr)
    setContacts(newContacts)
  })

  const remove = (contactId) => {
    const filteredContacts = contacts.filter(contact => {
      return contact._id !== contactId
    })}
  
  return (
  <div className="App">
    <h1>Ironcontacts</h1>


    <button onClick={() => addContact()} className="btn-add">Add random contact</button>

    <button onClick={() => sortByName()} className="btn-sort">Sort by name</button>

    <button onClick={() => sortByPopularity()} className="btn-add">Sort by popularity</button>


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
      <tbody>
      { contacts.map((contact) => 
      <tr>
        <td><img className="profile-pic" src={contact.pictureUrl} alt="contact"/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        {contact.wonOscar ? <td>🏆</td> : <td>nada</td>}
        {contact.wonEmmy ? <td>🏆</td> : <td>nada</td>}
      </tr>
      
      )}
      </tbody>
      
    </table>
  </div>

  )
}

export default App;