
import contactsData from '../contacts.json'
import React, {useState} from 'react'

import Trophy from './Trophy'




function ContactsList() {
    const [contacts, setContacts] = useState(contactsData.slice(0, 5))
    const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5))
    
    const deleteContact = (contactId) => {
      const filteredContact = contacts.filter((contact) => {
        return contact.id !== contactId;
      })
      setContacts(filteredContact)
    }

    const addRandomContact = () => {
      if(remainingContacts.length === 0) {
        alert('No more contacts!');
        return
      }
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

     
      // console.log('Remaining Contacts Length:', remainingContacts.length);
      // console.log('Random Contact:', randomContact);

      setContacts([...contacts, randomContact])
      
      const updatedRemainingContacts = remainingContacts.filter(
        (contact) => contact.id !== randomContact.id
      )

      
      setRemainingContacts(updatedRemainingContacts)
    }
    const sortByName = () => {
      const sortedContacts = [...contacts].sort((a,b) => 
      a.name.localeCompare(b.name))
      setContacts(sortedContacts)
    }
    const sortByPopularity = () => {
      const sortedByPopularity = [...contacts].sort((a,b) =>
      b.popularity - a.popularity)
      setContacts(sortedByPopularity)
    }
    
    return (
      <>
        <div className='list-contacts'>
          <h1>IronContacts</h1>
          <div className='buttons'>
          <button onClick={addRandomContact}>Add random contact</button>
          <button onClick={sortByPopularity}>Sort by popularity</button>
          <button onClick={sortByName}>Sort by name</button>

          </div>
          
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => {
                return (
                  <tr key={contact.id}>
                    <td><img src={contact.pictureUrl} alt="" /></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar && <Trophy></Trophy>}</td>
                    <td>{contact.wonEmmy && <Trophy></Trophy>}</td>
                    <td><button className='buttons' onClick={() => deleteContact(contact.id)}>Delete</button></td>
                    
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
export default ContactsList