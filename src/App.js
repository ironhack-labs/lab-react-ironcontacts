import { useState } from "react";

import "./App.css";
import contactsJson from '../src/contacts.json'

function App() {
  const fiveContacts = contactsJson.slice(0,5)
  const [contacts, setContacts] = useState(fiveContacts)

  function randomContact(e) {
    const copyContactState = [...contacts]
    const idConstactsState = contacts.map(contact=>contact.id)
    const remainingContacts = contactsJson.filter(contact =>{
      return !idConstactsState.includes(contact.id)
    })
    const newContact = remainingContacts[Math.floor(Math.random()*remainingContacts.length)]
    const newContactState = [...copyContactState, newContact]
    setContacts(newContactState)
    
  }

  const sortAlphabetically = () => {
    const copyContactState = [...contacts]
    const newContactState = copyContactState.sort((a,b) => {
      return  a.name.localeCompare(b.name)
    })
    setContacts(newContactState)
  }

  const sortPopularity = () => {
    const copyContactState = [...contacts]
    const newContactState = copyContactState.sort((a,b) => {
      return b.popularity - a.popularity
    })
    setContacts(newContactState)
  }
  
  const deleteContact = (id) =>{
    const copyContactState = [...contacts]
    const newContactState = copyContactState.filter(contact => {
      return contact.id !== id
    })
    setContacts(newContactState)
  }

  return  (<div className="App">
        <h1>IronContacts</h1>
        <div className="btns">
          <button onClick={randomContact}>Add Random Contact</button>
          <button onClick={sortPopularity}>Sort by Popularity</button>
          <button onClick={sortAlphabetically}>Sort by Name</button>
        </div>
        
        <table>
          <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Actions</th>
            </tr>
          </thead>
            
            {contacts.map((contact,i) => {
              return(  
                <tbody key={i}>
                  <tr>
                    <td><img src={contact.pictureUrl} alt=""></img></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>{contact.wonOscar && <span>🏆</span>}</td>
                    <td>{contact.wonEmmy && <span>🌟</span>}</td>
                    <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                  </tr>
                </tbody>
              )
            
            })}
        </table>
  </div>)
}
export default App;
