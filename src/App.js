import './App.css';
import React, { useState } from 'react'
import contacts from "./contacts.json"

function App() {
  const [ shownContacts, setShownContacts ] = useState(contacts.slice(0,5))
  const [ avaiableContacts, setAvaiableContacts ] = useState(contacts.filter((contact) => !shownContacts.includes(contact)))

  const addRandomContact = () => {
    if (avaiableContacts.length > 0) {
    const randomContact = avaiableContacts[Math.floor(Math.random() * avaiableContacts.length)]
    setShownContacts(prevContacts => [...prevContacts, randomContact])
    setAvaiableContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== randomContact.id)
    );
    }
  }

  const sortByName = () => {
    const sortedArray = shownContacts.sort((a,b) => a.name.localeCompare(b.name))
    setShownContacts(() => [...sortedArray])
  }
  const sortByPopularity = () => {
    const sortedArray = shownContacts.sort((a,b) => (b.popularity - a.popularity))
    setShownContacts(()=> [...sortedArray])
  }

  const deleteContact = deletedId => {
    const copy = [...shownContacts]
    const index = copy.findIndex(contact => contact.id === deletedId)
    copy.splice(index, 1)
    setShownContacts(() => [...copy])
  }

  return (
    <div className='container'>
      <h1>IronContacts</h1>

    <button className="upper-button" onClick={addRandomContact}>Add Random Contact</button>
    <button className="upper-button"  onClick={sortByName}>Order by Name</button>
    <button className="upper-button"  onClick={sortByPopularity}>Order by Popularity</button>
    <div className="App">
<table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy</th>
      <th></th>
    </tr>
  </thead>
  
  <tbody>
    {shownContacts.map((contact)=>{
      return (
        <tr key={contact.id}>
          <td><img className="contact-photo" src={contact.pictureUrl} alt="contact" /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          {contact.wonOscar ? <td>🏆</td> : <td></td>}
          {contact.wonEmmy ? <td>🏆</td> : <td></td>}
          <td><button className="delete-button" onClick={()=>{deleteContact(contact.id)}}>🗑</button></td>
        </tr>)})
    }
  </tbody>
</table>
    </div>
    </div>);
}

export default App;
