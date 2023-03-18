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
    }
  }
  const handlePopularityClick = () => {
    setContacts((prev) => {
      const prevClone = [...prev]
      return prevClone.sort((a, b) => b.popularity - a.popularity)
    })
  }
  const handleNameClick = () => {
    setContacts((prev) => {
      const prevClone = [...prev]
      return prevClone.sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1
        }
        return 0
      })
    })
  }


  return (
    <>
      <div className='flex m-2 gap-3'>
        <button className='border border-black px-3 bg-slate-200 disabled:opacity-50' onClick={handleAddClick} disabled={!remainContacts.length}>Add Random Contact</button>
        <button className='border border-black px-3 bg-slate-200 disabled:opacity-50' onClick={handlePopularityClick}>Sort by popularity</button>
        <button className='border border-black px-3 bg-slate-200 disabled:opacity-50' onClick={handleNameClick}>Sort by name</button>
      </div>
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
