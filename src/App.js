import './App.css';
import contactData from "./contacts.json";
import { useState } from "react";

function App() {
  const initialContacts = contactData.slice()
  const [contacts, setContacts] = useState(initialContacts.splice(0, 5))
  

  function randomContact() {

    const filteredInitialContacts = []

    initialContacts.forEach((initialContact) => {
      contacts.forEach((contact) => {
        if (contact.id !== initialContact.id) {
          if (!filteredInitialContacts.includes(initialContact)) {
            filteredInitialContacts.push(initialContact)
          }
        }
      })
    })

    setContacts(filteredInitialContacts)
    
    console.log(filteredInitialContacts)

    // const randomNum = Math.floor(Math.random() * initialContacts.length)
    // const randomContact = initialContacts.splice(randomNum, 1)

    // console.log("random contact", randomContact)
    // console.log("initial contacts", initialContacts)
    
    // const newContacts = [...contacts]
    // newContacts.push(randomContact[0])
    // setContacts(newContacts)
  }

  function sortByName() {
    const newContacts = [...contacts]
    const sortedContacts = newContacts.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortedContacts)
  }

  function sortByPopularity() {
    const newContacts = [...contacts]
    console.log("new contacts", newContacts)
    const sortedContacts = newContacts.sort((a, b) => { return a.popularity - b.popularity })
    console.log("sorted contacts", sortedContacts)
    setContacts(sortedContacts)
  }

  function deleteContact(contactId) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId
    })
    setContacts(filteredContacts)
  }


  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={() => randomContact()}>Add Random Contact</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>

      <table>
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

        { contacts.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td><img className="contact-img" src={contact.pictureUrl} alt="img" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : "" }</td>
                <td>{contact.wonEmmy ? "🥈" : "" }</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            </tbody>
          )
        }) }
      </table>
    </div>
  );
}

export default App;
