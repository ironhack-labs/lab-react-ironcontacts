import './App.css';
import contactsInfo from './contacts.json'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const firstFiveElements = contactsInfo.slice(0,5);

function App() {

  const [contacts, setContacts] = useState(firstFiveElements);

  const randomContact = contactsInfo[Math.floor(Math.random() * contactsInfo.length)]

  function deleteContact (contactID) {
    let filteredContacts = contacts.filter(contact => {
      return contact.id !== contactID 
    })
    setContacts(filteredContacts);
  }
    

  

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className='buttons'>
        <button onClick={() => setContacts([...contacts, randomContact ])}>Add Random Contact</button>
        <button onClick={() => setContacts([...contacts].sort((a, b) => a.popularity - b.popularity))}>Sort by popularity</button>
        <button onClick={() => setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)))}>Sort by name</button>
      </div>
      <table>
        <ul>
          <li>
            <h4>Picture</h4>
            <h4>Name</h4>
            <h4>Popularity</h4>
            <h4>Won Oscar</h4>
            <h4>Won Emmy</h4>
            <h4>Actions</h4>
          </li>
          {contacts.map(contact =>{
            return <li key={uuidv4()}>
                    <img src={contact.pictureUrl} width='80px'></img>
                    <h4>{contact.name}</h4>
                    <p>{(Math.round(contact.popularity * 100) / 100).toFixed(2)}</p>
                    {contact.wonOscar ? <p>🏆</p> : <p></p>}
                    {contact.wonEmmy ? <p>🏆</p> : <p></p>}
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                   </li> 
          })}
        </ul>
        </table>
    </div>
  );
}

export default App;
