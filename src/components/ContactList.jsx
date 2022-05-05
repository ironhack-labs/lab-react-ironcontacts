import React, { useState } from 'react'
import contactsData from '../contacts.json'

function ContactList() {

  const [selectedContacts, setContacts] = useState(contactsData.slice(0, 5));
  const [hiddenContacts, setHiddenContacts] = useState(contactsData.slice(5));

  const getRandomContact = () => {

    //Always take a copy! -  hidden, then splce this one and then call our set with the new
    let hiddenContactsCopy = [...hiddenContacts];
    let randomContact = hiddenContactsCopy.splice(Math.floor(Math.random() * hiddenContactsCopy.length), 1);

    setContacts([...selectedContacts, randomContact[0]]);
    setHiddenContacts(hiddenContactsCopy);
  }

  const sortByName = () => {
    let selectedContactsCopy = [...selectedContacts];

    selectedContactsCopy.sort((a,b) =>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    setContacts(selectedContactsCopy);
  }

  const sortByPopularity = () => {
    let selectedContactsCopy = [...selectedContacts];

    selectedContactsCopy.sort((a,b) => b.popularity - a.popularity);

    setContacts(selectedContactsCopy);
  }

  const removeContact = (id) => {
    let remainingContacts = selectedContacts.filter(contact => {
      return contact.id !==id;
    })
    setContacts(remainingContacts)
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button type='submit' onClick={getRandomContact}>Add Random Contact</button>
      <button type='submit' onClick={sortByName}>Sort By Name</button>
      <button type='submit' onClick={sortByPopularity}>Sort By Popularity</button>
      <div className='table'>
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
            {selectedContacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="celeb pic" /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  {contact.wonOscar ? <td>🏆</td> : <td></td>}
                  {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                  <button type='submit' onClick={() => removeContact(contact.id)}>Delete</button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContactList;