import { useState } from 'react'
import contacts from './contacts.json'
import './App.css';

function App() {
  let firstFive = contacts.slice(0, 5)
  const [contactsToDisplay, setContacts] = useState(firstFive);
  
 const addContact = (contact) => {
    const newContact = contacts[Math.floor(Math.random()*contacts.length)];
    contactsToDisplay.push(newContact)
    console.log(newContact)
    return(
      <div>
        <td><img className="picture"src={newContact.pictureUrl}/></td>
        <td>{newContact.name}</td>
        <td>{newContact.popularity.toFixed(2)}</td>
        <td>{newContact.wonOscar && <p>🏆</p>}</td>
        <td>{newContact.wonEmmy && <p>🏆</p>}</td>
      </div>
    )
  }

  const deleteContact = (contactId) => {
    const newList = contactsToDisplay.filter((element) => {
      return element.id !== contactId;
    })
    setContacts(newList)
  }

  return (
    <div className="App">
      <h1>IRONHACKER</h1>
      <p><button onClick={() => {addContact(contacts)}}>Add Random Contact</button></p>
      <table>
        <thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
    <th>Delete</th>
  </tr>
  </thead>
   
  {contactsToDisplay.map((element) => {
    return (
      <tbody>
    <td><img className="picture"src={element.pictureUrl}/></td>
    <td>{element.name}</td>
    <td>{element.popularity.toFixed(2)}</td>
    <td>{element.wonOscar && <p>🏆</p>}</td>
    <td>{element.wonEmmy && <p>🏆</p>}</td>
    <td><button onClick={() => {deleteContact(element.id)}}>Delete this contact</button></td>
    </tbody>
    )
  })
}
</table>
    </div>
  );
}

export default App;
