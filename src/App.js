//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import contactsArray from './contacts.json'



function App() {
let firstFive = contactsArray.slice(0,5)
const [contacts, setContacts] = useState(firstFive)
console.log(firstFive)

const elements = firstFive.map((contact)=>{
  return(


<tr>
<td><img src={contact.pictureUrl} width='60px'/></td>
<td>{contact.name}</td>
<td>{(contact.popularity).toFixed(2)}</td>
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
</tr>
</thead>
<tbody>{elements}</tbody>
  </table>
  </div>
 )
}

export default App;
