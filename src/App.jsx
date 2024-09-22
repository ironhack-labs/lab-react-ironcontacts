import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5))
  const [restoContacts, setRestoContacts] = useState(contactsArr.slice(5))

  const handleAddContact = () => {
    // const contactosRestantes = contactsArr.slice(5, contactsArr.length)
    
    if (restoContacts.length > 0) {
    
      let randomIndex = Math.floor(Math.random() * restoContacts.length)
      let randomContact = restoContacts[randomIndex]

      const nuevosContactos = contacts.map((contact) => {
        return contact
      })
      nuevosContactos.push(randomContact)
      
      setContacts(nuevosContactos);

      
      const removerContacts = restoContacts.slice()
      removerContacts.splice(randomIndex, 1)

      setRestoContacts(removerContacts)

      console.log(restoContacts)
  }}

  const handleSortByName = () => {
    const sortedContacts = contacts.slice()
    
    sortedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    setContacts(sortedContacts)
  }

  const handleSortByPopularity = () => {
    const sortedContacts = contacts.slice()
    
    sortedContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      }
      if (a.popularity > b.popularity) {
        return -1
      }
      return 0
    })
    setContacts(sortedContacts)
  }

  const handleDeleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(filteredContacts) 
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="botones">
        <button onClick={handleAddContact}>
          Add Random Contact
        </button>
        <button onClick={handleSortByName}>Sort by name</button>
        <button onClick={handleSortByPopularity} >Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  style={{ width: "50px" }}
                  src={contact.pictureUrl}
                  alt=""
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar === true ? "🏆" : null}</td>
              <td>{contact.wonEmmy === true ? "🌟" : null}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)} style={{backgroundColor: "lightcoral"}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
