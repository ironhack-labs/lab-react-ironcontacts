import React, { useState } from 'react'
import Contact from '../Contacts/Contact'
import contactsData from "../../contacts.json"

const restContacts = contactsData.map(x => x);

for (let i = 0; i < 5; i++) {
  restContacts.shift();
}

function Table() {
  const contactsArray = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(contactsArray);



  function handleAddRandomContact() {
    if (restContacts.length !== 0) {
      const index = (Math.floor(Math.random() * restContacts.length))
      setContacts([...new Set([restContacts[index], ...contacts])])

      restContacts.splice(index, 1);
    } else {
      return
    }
  }

  function handleSortByPopularity() {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity))
  }


  function handleSortByName() {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)))
  }


  const handleDeleteContact = (contact) => {
    setContacts((prev) => prev.filter(contactToDelete => contactToDelete.id !== contact.id))
    restContacts.push(contact)
  }



  return (
    <div>
      <h1 className="mt-3 mb-3 fw-bold">IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <table className="m-3">
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
        <tbody>{contacts.map(contact => <Contact contact={contact} onClickDelete={(event) => handleDeleteContact(contact)} key={contact.id} />)}</tbody>
      </table>
    </div>
  )
}

export default Table