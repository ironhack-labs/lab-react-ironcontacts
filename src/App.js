//import logo from './logo.svg';
import './App.css';
//import ContactCardlist from './components/ContactCardlist';
import contactlist from './contacts.json'
import { useState } from 'react';

const copycontact = [...contactlist]
const fivecontact = copycontact.splice(0,5)

function App() {
  const [contacts,setContacts] = useState(fivecontact);

  const addNewContact = ()=>{
  const random =  Math.floor(Math.random() * copycontact.length)
  const randomcontact = copycontact[random]
  setContacts([...contacts,randomcontact])
 
  }

  return (
   
    <div className="App">
       <h1>IronContacts</h1>
       <button onClick={()=>addNewContact()}>Add Random Contact </button>
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
 { contacts.map(contact=>{
  return(
    <tr key = {contact.id} className="tablecontent">
    <td> <img src={contact.pictureUrl} alt="star"/> </td>
    <td>{contact.name}</td>
    <td>{contact.popularity.toFixed(2)}</td>
    <td>{contact.wonOscar ? '🏆':'❌'}</td>
    <td>{contact.wonEmmy ? '🏆':'❌'}</td>
  </tr>
  )
  
 })}
  
  
  </tbody>
</table>


    </div>
  );
}

export default App;
