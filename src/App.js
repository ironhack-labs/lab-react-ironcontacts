import React, { useState } from 'react'
import contacts from './contacts.json'
import './App.css'

const firstFive = contacts.slice(0,6)


function App () {
  
  const [contactArray, setContactArray] = useState(firstFive)
  

  const randomContact = () => {
    const leng = contacts.length
    let random = Math.floor(Math.random() * leng)
    setContactArray([...contactArray, contacts[random]])
  }
  
  const sortAlphabetically = () => {
    let data = contactArray
    let sorted = data.sort(function (a,b) {
      if (a.name < b.name) {return -1;}
      else if (b.name < a.name) {return 1;}
      return 0;
    })
    setContactArray([...sorted])
  }

  const sortPopular = () => {
    let data = contactArray
    let sorted = data.sort(function (a,b) {
      if (a.popularity > b.popularity) {return -1;}
      else if (b.popularity > a.popularity) {return 1;}
      return 0;
    })
    setContactArray([...sorted])
  }

  const deleteContact = (key) => {
    const filteredContacts = contactArray.filter(contact => {
      return contact.id !== key;
  })
    setContactArray([...filteredContacts])
}

  const contactsTable = contactArray.map(obj => (
        <tbody key={obj.id}>
        <tr>
        <td style={{textAlign: 'left'}}><img style={{height: 100}} src={obj.pictureUrl} alt="" /></td>
        <td style={{textAlign: 'left'}}>{obj.name}</td>
        <td style={{textAlign: 'left'}}>{obj.popularity}</td>
        {obj.wonOscar && <td style={{textAlign: 'left'}}>🏆</td>}
        {obj.wonEmmy && <td style={{textAlign: 'left'}}>🏆</td>}
        <button onClick={() => deleteContact(obj.id)}>Delete Contact</button>
        </tr>
        </tbody>
        ))
        
  

  return(<div>
    <h1>Ironhack Contacts</h1>
    <button onClick={randomContact}>Add random Contact</button>
    <button onClick={sortAlphabetically}>Sort alphabetically</button>
    <button onClick={sortPopular}>Sort by popularity</button>
    <table style={{textAlign: 'left'}}>
    <thead>
    <tr>
      <th style={{width: 100}}><strong style={{textAlign: 'left'}}>Picture</strong></th>
      <th style={{width: 200}}><strong style={{textAlign: 'left'}}>Name</strong></th>
      <th style={{width: 200}}><strong style={{textAlign: 'left'}}>Popularity</strong></th>
      <th style={{width: 200}}><strong style={{textAlign: 'center'}}>Won Oscar</strong></th>
      <th style={{width: 200}}><strong style={{textAlign: 'center'}}>Won Emmy</strong></th>
    </tr>
    </thead>
    {[contactsTable]}
    </table>
    </div>
    
  )
}

export default App