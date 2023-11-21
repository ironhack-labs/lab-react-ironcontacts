import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5))
  const addContact = () => {
    console.log(remainingContacts)
    if (remainingContacts.length === 0) {
      return
    }
    const remainingContactsCopy = [...remainingContacts]
    const contactsCopy = [...contacts]
    const randomContact = Math.floor(Math.random() * remainingContacts.length);
    contactsCopy.push(remainingContacts[randomContact])
    remainingContactsCopy.splice(randomContact, 1)
    setContacts(contactsCopy)
    setRemainingContacts(remainingContactsCopy)
  }

  const sortContact = () => {
    const contactsCopy = [...contacts]

    contactsCopy.sort((contactA, contactB) => {
      return contactB.popularity - contactA.popularity
    })

    setContacts(contactsCopy)
  }

  const sortContactName = () => {
    const contactsCopy = [...contacts]

    contactsCopy.sort((contactA, contactB) => {
      return contactA.name - contactB.name
    })

    setContacts(contactsCopy)
  }

  const deleteContact = (contactId) => {
    const newContacts = contacts.filter(elm => elm.id != contactId)
    setContacts(newContacts)
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}> Add Random Contact </button>
      <button onClick={sortContact}> Sort by popularity </button>
      <button onClick={sortContactName}> Sort by name </button>
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
        <tbody>
          {
            contacts.map(eachContact => {
              return (
                <tr key={eachContact.id}>
                  <td> <img src={eachContact.pictureUrl} alt={eachContact.name} style={{ height: 200 }}></img> </td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  <td>{eachContact.wonOscar ? "🏆" : ""}</td>
                  <td>{eachContact.wonEmmy ? "🌟" : ""}</td>
                  <td>
                    <button onClick={() => deleteContact(eachContact.id)}> Delete </button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>

      </table>
    </div>
  );
}

export default App;
