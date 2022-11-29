import { useState } from 'react';
import './App.css';
import contactsArray from "./contacts.json";

const Contacts = () => {

  const contacts = contactsArray.slice(0, 10);



  // Sacamos Un Random Contact 

  const newContact = (Math.floor(Math.random()) * contacts.length)
  const contactsCopy = [...contacts]
  contactsCopy.push(contacts(newContact))

  // Actualizamos la copia mutada
  // setContacts(contactsCopy)
  return (
    <table class='table'>
      <h2>IronContacts</h2>
      <button onClick={randomContact}>Add Random Contact</button>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
      {contacts.map(elm => {
        return (
          <tr key={elm._id}>
            <td>
              <img src={elm.pictureUrl} />
            </td>
            <td>{elm.name}</td>
            <td>{elm.popularity}</td>
            {elm.wonOscar && "🏆"}
            {elm.wonEmmy && "🏆"}
          </tr>
        )
      })}
    </table>
  )
}

export default Contacts;

