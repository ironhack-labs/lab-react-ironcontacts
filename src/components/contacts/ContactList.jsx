import React, { useEffect, useState } from 'react'
import ContactItem from './ContactItem'
import contactsJson from '../../contacts.json'



export default function ContactList() {

  const [contacts, setContacts] = useState([])
  const [remainContacts, setRemainContacts] = useState([])

  useEffect(() => {
    setContacts(contactsJson.slice(0, 5))
    setRemainContacts(contactsJson.slice(5))
  }, [])


  const handleAddClick = () => {
    if (remainContacts.length !== 0) {
      const randomNum = Math.floor(Math.random() * (remainContacts.length))
      setContacts((prev) => [
        ...prev,
        remainContacts[randomNum]
      ])
      setRemainContacts((prev) => prev.filter((contact) => contact.id !== remainContacts[randomNum].id))
      console.log(remainContacts);
    }
  }


  return (
    <>
      <button className='border border-black py-1 px-5 bg-slate-200' onClick={handleAddClick}>Add Random Contact</button>
      <table className='table-auto mx-7'>
        <thead>
          <tr>
            <th className='w-16'>Picture</th>
            <th className='w-16'>Name</th>
            <th className='w-16'>Popularity</th>
            <th className='w-16'>Won Oscar</th>
            <th className='w-16'>Won Emmy</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {contacts.map((contact) => (<ContactItem key={contact.id} {...contact} />))}
        </tbody>
      </table>
    </>
  )
}
