import React, { useState } from 'react'
import Contact from './Contact'
import contactsDB from '../contacts.json'

function ContactList() {
  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))

  const onClickAddRandom = () => {
    setContacts((prevs) => {
      const remains = contactsDB.filter(contact => prevs.every(prev => prev.id !== contact.id))
      return [...prevs, remains[Math.floor(Math.random() * (remains.length - 1))]]
    })
  }

  const onClickSortBy = (field) => {
    setContacts((prevs) => {
      return [...prevs.sort((a, b) => {
        if (a[field] > b[field]) {
          return field === 'popularity' ? -1 : 1
        } else if (a[field] < b[field]) {
          return field === 'popularity' ? 1 : -1
        } else {
          return 0
        }
      })]
    })
  }

  return (
    <>
      <button className='btn btn-outline-primary mb-3 me-3' onClick={onClickAddRandom}>Add random contact</button>
      <button className='btn btn-outline-primary mb-3 me-3' onClick={() => onClickSortBy('popularity')}>Sort by popularity</button>
      <button className='btn btn-outline-primary mb-3' onClick={() => onClickSortBy('name')}>Sort by name</button>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => <Contact key={contact.id} {...contact} />)}
        </tbody>
      </table>
    </>
  )
}

export default ContactList