import React, { useState } from "react";
import "./App.css";
import contacts from "../src/contacts.json"


function App() {

  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter((contact) => { return !contactList.includes(contact)})
  
  const randomIndex = Math.floor(Math.random() * remainingContacts.length)
  const randomContact = remainingContacts[randomIndex]
  
  setContactList((prevContactList) => {return [randomContact, ...prevContactList]})
}

  const sortByName = () => {
    const sortedByName = [...contactList]
    sortedByName.sort((a,b) => {return a.name.localeCompare(b.name)})
    setContactList(() => {return sortedByName})
  }

  const sortByPopularity = () => {
    const sortedByPopularity = [...contactList]
    sortedByPopularity.sort((a,b) => {return b.popularity - a.popularity})
    setContactList(() => {return sortedByPopularity})
  }

  const deleteContact = (id) => {
    const newList = contactList.filter( (contact) => {
      if (contact.id === id) {
        return false
      }
      else {
        return true
      }
    })
    setContactList(() => {return newList})
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div class="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>       
        <tbody>
          {contactList.map((contact, index) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && <p>&#127942;</p>}</td>
              <td>{contact.wonEmmy && <p>&#127942;</p>}</td>
              <td><button onClick={ () => {deleteContact(contact.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
