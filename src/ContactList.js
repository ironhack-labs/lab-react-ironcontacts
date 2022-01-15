import contacts from './contacts.json'
import { useState } from 'react'
import ContactCard from './ContactCard'
import SortButton from './SortButton'

const ContactList = () => {

  const firstFiveContacts = contacts.slice(0,5)
  const [listOfContact, setContact] = useState(firstFiveContacts)

  const addRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length)
    if (listOfContact.indexOf(contacts[randomNumber]) === -1 ){
      setContact([...listOfContact, contacts[randomNumber]])
    } else if (listOfContact.indexOf(contacts[randomNumber]) !== -1 ) {
      addRandomContact()
    }
  }

  const sortContact = (str) => {
    let sortedContacts = listOfContact.slice(0)
    sortedContacts.sort((a, b) => (str === 'name') ? (a[str] > b[str] ? 1 : -1 ) : b[str] - a[str])
    setContact(sortedContacts)
  }
  

  // const deleteContact = () => {

  // }
  
  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <SortButton onSort={sortContact} value='name' />
      <SortButton onSort={sortContact} value='popularity' />
      <table>
      <thead>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
        </tr>
      </thead>
      <tbody>
          {
            listOfContact.map((contact)=><tr key={contact.id}><ContactCard {...contact} /></tr>)
          }
      </tbody>
      </table>
    </>
  )  
}
export default ContactList