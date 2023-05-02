import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';


function App() {
  const [myContacts, setMyContacts] = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]);
  function addContact() {
    let ranIndex = Math.floor(Math.random() * ((myContacts.length -1)-5+1)+5)
    let newContact = contacts[ranIndex]
    let newArray = [...myContacts, newContact]
    setMyContacts(newArray)
  }
  return (
  <div className="App">

<h1>Iron Contacts</h1>
 <button onClick={addContact}> Add Random Contact </button>

<table>
 <thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won an Oscar</th>
    <th>Won an Emmy</th>
  </tr>
 </thead>
 <tbody>
  {myContacts.map(contact => {
    return (
    <tr>
      <td><img src={contact.pictureUrl} alt="Image" height={200}/></td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td>
        {contact.wonOscar === true ? "🏆" : null}
      </td>
      <td>
        {contact.wonEmmy === true ? "🏆" : null} 
      </td>
    </tr>
    )
  })}
  
 </tbody>
</table>

</div>
  )
}

export default App;
