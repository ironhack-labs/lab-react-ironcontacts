//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json'



function App() {
  //first five
let firstFive = contactsArray.slice(0,5)
//all other contacts
let remainingContacts = contactsArray.slice(5)
//destructed array of useHook
const [contacts, setContacts] = useState(firstFive)


function addRandom() {
  let index = Math.floor(Math.random() * remainingContacts.length);
  let randomContact = remainingContacts[index];
  setContacts(prevContacts => {
    const newList = [...contacts, randomContact]
    return newList
  })
    
}


const contactInfo = contacts.map((contact)=>{
  return(


<tr key={contact.id}>
<td><img src={contact.pictureUrl} width='60px'/></td>
<td>{contact.name}</td>
<td>{(contact.popularity).toFixed(2)}</td>
<td>{contact.wonOscar ? "🏆" :null} </td>
<td>{contact.wonEmmy ? "🏆":null}</td>
</tr>

  )
})
 return(
  <div className="App">
  <h1>Ironcontacts</h1>
  <table>
  <thead>
  <tr>
<th>Picture</th>
<th>Name</th>
<th>Popularity</th>
<th>Won An Oscar</th>
<th>Won An Emmy</th>
</tr>
</thead>
<tbody>{contactInfo}</tbody>
  </table>
  <button onClick={addRandom}>Create a random contact</button>
  </div>
 )
}

export default App;
