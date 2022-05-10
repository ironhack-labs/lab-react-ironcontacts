
import './App.css';
import { useState } from 'react';
import contacts from "./contacts.json"

let contactsArray = contacts;

function App() {
  let contactsArr = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]];
  const[contactArr, setContacts] = useState(contactsArr)

  const addRandomContact = ()=>{
     setContacts(prevContacts=>{
     const newList =  prevContacts.concat(contacts[Math.trunc(Math.random()*52) + 1]);
      return newList;
     })
   }

  const sortByAlphabet = ()=>{
    setContacts(prevContacts=>{
      const alphabeticList = prevContacts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
      return alphabeticList;
    })
  }




  return (
    <div className="App">

    <button onClick={addRandomContact}>Add random contact</button>
    <button onClick={sortByAlphabet}>Sort by Name</button>
    
    <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Oscar</th>
      <th>Emmy</th>

    </tr>
    </table> 

  { contactArr.map((contact)=>{
   return(  
  
   <table>
  <tr id={contact.id}>
    <td className='image'><img src={contact.pictureUrl}></img></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
    {contact.wonOscar ? <td>🏆</td> : null}
    {contact.wonEmmy ? <td>🏆</td> : null}
  </tr>
  </table> 
   )
  }
     
  ) }
    </div>
  );
}

export default App;
