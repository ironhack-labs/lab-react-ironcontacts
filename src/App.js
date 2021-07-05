import contacts from "./contacts.json"
import "./App.css"
import { useState } from "react";

function App() {

  const firstFiveContacts = contacts.slice(0, 5)
  const [contact, setContact] = useState(firstFiveContacts)
  
  function addRandomContact() {
    const randomContact = (contacts[Math.floor(Math.random() * contacts.length)])
    setContact(contact => {
      return [...contact, randomContact]
    })
  }

  function sortByName() {
    const sortContact = contact.sort((a, b) => a.name.localeCompare(b.name))
    setContact([...sortContact])
  }

  function sortByPopularity() {
    const sortPopularity = contact.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
    setContact([...sortPopularity])
  }

  function deleteContact(id) {
    const deletedContact = contact.filter(contacts => contacts.id !== id)
    setContact([...deletedContact])
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
          <td><h2>Picture</h2></td>
          <td><h2>Name</h2></td>
          <td><h2>Popularity</h2></td>
          </tr>
        </thead>
        <tbody>
          {contact.map(contact => 
          <tr key={contact.id}>
            <td><img className="tableImg" src={contact.pictureUrl} alt={contact.name}/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
