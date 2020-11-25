import React, {useState} from 'react'
import Row from './Row.js'
import contacts from '../contacts.json'

export default function Table(){

  let num = 5
  const fiveArray = [...contacts]
  fiveArray.length = num
  
  let [contactList, setContacts] = useState(fiveArray)
  let [nameSort, setNameSort] = useState(false)
  let [popSort, setPopSort] = useState(false)

  
  const addContact = () => {
    let addArray = [...contactList]
    let random = Math.floor(Math.random()*(contacts.length-num)+num)
    addArray.push(contacts[random])
    setContacts(contactList = addArray)
  }

  const sortName = () => {
    setNameSort(!nameSort)
    let reverse 
    (nameSort) ? reverse=-1 : reverse =1
    let sortNameArray = [...contactList]
    sortNameArray.sort((a,b) => {
      return (a.name).toString().localeCompare(b.name)*reverse
    })
    setContacts(contactList=sortNameArray)
  }

  const sortPopularity = () => {
    setPopSort(!popSort)
    let reverse 
    (popSort) ? reverse=-1 : reverse =1
    let sortPopArray = [...contactList]
    sortPopArray.sort((a,b) => {
      return (a.popularity - b.popularity)*reverse
    })
    setContacts(contactList=sortPopArray)
  }
  
  const deleteContact = id => setContacts(
    contactList.filter(el => el.id !== id)
  )

  return (
    <div>
      <div>
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortName}>Sort by name</button>
        <button onClick={sortPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(el => <Row 
            key={el.id}
            {...el}
            handleDelete={() => deleteContact(el.id)}
          />)}
        </tbody>
      </table>
    </div>
  )
}