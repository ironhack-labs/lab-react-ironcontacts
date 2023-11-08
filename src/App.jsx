import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";


function App() {

  // Iteration 1  
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contactsJSON.slice(5, contactsJSON.length))

  // Iteration 3
  const addRandomContact = () => {

    let randomContactNumber = Math.floor(Math.random() * remainingContacts.length)
    let randomContact = remainingContacts[randomContactNumber]

    const copyContacts = [...contacts]
    copyContacts.push(randomContact)

    setContacts(copyContacts)
  }

  // Iteration 4
  const sortByName = () => {
    const newList = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(newList)
  }

  const sortByPopularity = () => {
    const newList = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(newList)
  }

  // Iteration 5
  const deleteContact = (contactId) => {
    const newList = contacts.filter((contactDetails) => {
      return contactDetails.id !== contactId
    })
    setContacts(newList)
  }



  return (
    <>
      <h1>IronContacts</h1>

      {/*Iterations 1-5*/}
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} width="100px" /></td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""} </td>
              <td><button onClick={function () { deleteContact(contact.id) }}>Delete</button></td>
            </tr>
          )
        })}
      </table>
    </>
  );
}

export default App;
