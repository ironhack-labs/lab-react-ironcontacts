// src/App.js
import { useState } from "react";

import "../App.css";
import contactsData from '../contacts.json'
import ContactRow from "./ContactRow";

const ContactList = () => {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContacts = () => {
    console.log('cliquei')
    let randomIndex = Math.floor(Math.random() * contactsData.length)
    let randomContact = contactsData[randomIndex];

    for (let contact of contacts) {
      if (contact.id === randomContact.id) {
        return addRandomContacts()
      }
    }
    const newContacts = [randomContact, ...contacts]
    setContacts(newContacts);
  }

  const deleteContact = (id) => {

    let updatdContacts = [...contacts]
    const index = updatdContacts.findIndex((contacts) => contacts.id === id)
    updatdContacts.splice(index, 1);
    setContacts(updatdContacts);
  }


  const sortContacts = (field) => {

    let updatdContacts = [];
    if (field === 'name') {
      updatdContacts = [...contacts].sort((a, b) => a.name > b.name ? 1 : -1)
    } else if (field === 'popularity') {
      updatdContacts = [...contacts].sort((a, b) => a.popularity - b.popularity)
    }
    setContacts(updatdContacts)
  }


  return <div className="App">
    <h1> Iron Contacts</h1>
    <button onClick={() => addRandomContacts()}> Add Random Contact</button>
    <button onClick={() => sortContacts('name')}>Sort by name</button>
    <button onClick={() => sortContacts('popularity')}>Sort By Popularity</button>
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
        {contacts.map(contacts =>
          <ContactRow {...contacts} deleted={() => { deleteContact() }} />)}
      </tbody>

    </table >
  </div >;
}
export default ContactList;