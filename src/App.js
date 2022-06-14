import React, { useState } from 'react'
import './App.css'
import allJsonContacts from './contacts.json'


const firstFiveContacts = allJsonContacts.slice(0, 5)


function App() {
  const [contacts, setContacts] = useState(firstFiveContacts)
  
const addContact=()=>{
let randomIndex=Math.floor( Math.random()*allJsonContacts.length)
let randomContact=allJsonContacts[randomIndex]
setContacts([randomContact, ...contacts])
}



  return (
    <div className='App'>
    <h1>IronContacts</h1>
    <button onClick={addContact}> Add Random Contact </button>
    <button onClick={() => setContacts()}> Sort by popularity </button>
    <button onClick={() => setContacts()}> Sort by name </button>
     <br></br>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an<br></br>Oscar</th>
            <th>Won an<br></br>Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts
      .map(element => {
        return (
          <tr>
          <td><img className="celi" src={element.pictureUrl} alt=""/></td>
          <td>{element.name}</td>
          <td>{element.popularity}</td>
          <td>{element.wonOscar ? '🏆' : null}</td>
          <td>{element.wonEmmy ? '🏆' : null}</td>
          <button onClick={() => setContacts(contacts._id)} className="btn-delete">
        Delete
      </button>
          </tr>
        )
      }
      )}
        </tbody>
      </table>
    </div>
    
  
  )
}

export default App
