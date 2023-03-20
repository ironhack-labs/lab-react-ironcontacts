import React, {useEffect, useState} from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
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
      const sortedContacts = [...prevContacts].sort((a, b) => { return a.name > b.name ? 1 : -1})
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
      <h1 className='mt-5'>IronContacts</h1>
      <div>
        <button className='m-3' onClick={handleRandomContact}>Add Random Contact</button>
        <button className='m-3' onClick={handleSortpopularity}>Sort by popularity</button>
        <button className='m-3' onClick={handleSortName}>Sort by name</button>
      </div>
      <table width='500'>
      <tbody>
        <tr>
          <th className='px-3'>Picture</th>
          <th className='px-3'>Name</th>
          <th className='px-3'>Popularity</th>
          <th className='px-3'>Won Oscar</th>
          <th className='px-3'>Won Emmy</th>
          <th className='px-3'>Actions</th>
        </tr>
        {contacts?.map((contact) => <ContactList key={contact.id} {...contact} onClickDelete={() => handleDeleteContact(contact.id)}/>)}
      </tbody>
      </table> 
    </div>
  );
}

export default App;
