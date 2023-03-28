import React, {useEffect, useState} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contactsJson from "./contacts.json";


function App() {
  const [contacts, setContacts] = useState([contactsJson[0], contactsJson[1], contactsJson[2], contactsJson[3], contactsJson[4]])

  const handleRandomContact = () => {
      setContacts((prevContacts) => {
      let randomContact

      do {
        randomContact = contactsJson[Math.floor(Math.random() * contactsJson.length)]
      } while (prevContacts.includes(randomContact))
      console.log(randomContact)

      return [randomContact, ...prevContacts]
      })   
  }

  const handleSortpopularity = () => {
    setContacts((prevContacts) => {
      const sortedContacts = [...prevContacts].sort((a, b) =>  { return b.popularity - a.popularity })
      return sortedContacts;
    })
  }

  const handleSortName = () => {
    setContacts((prevContacts) => {
      const sortedContacts = [...prevContacts].sort((a, b) => {
        return a.name > b.name ? 1 : -1
      })
      return sortedContacts;
    })
  }

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => {
      console.log(`Deleting ${id}`)
      return prevContacts.filter(contact => contact.id !== id)

    })
  }

  useEffect(() => {
    setContacts(contacts)
  },[contacts])

  return (
    <div className='d-flex flex-column align-items-center'>
    <h1 className='mt-3'>IronContacts</h1>
    <div>
      <button className='m-4' onClick={handleRandomContact}>Add Random Contact</button>
      <button className='m-4' onClick={handleSortpopularity}>Sort by popularity</button>
      <button className='m-4' onClick={handleSortName}>Sort by name</button>
    </div>
    <table className='principal'>
    <tbody>
      <tr>
        <td className='px-2'>Picture</td>
        <td className='px-2'>Name</td>
        <td className='px-2'>Popularity</td>
        <td className='px-2'>Won Oscar</td>
        <td className='px-2'>Won Emmy</td>
        <td className='px-2'>Actions</td>
      </tr>
      {contacts?.map((contact) => 
      <ContactList key={contact.id} {...contact} onClickDelete={() => 
      handleDeleteContact(contact.id)}/>)}
    </tbody>
    </table> 
  </div>
);
}

export default App;
