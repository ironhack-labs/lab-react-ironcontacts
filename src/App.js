import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {
  const [contactsArr, setContactsArr] = useState(contacts);
  const firstFiveContacts = contacts.slice(0, 5)
  const restContacts = contacts.slice(5)
  let additionalContact = restContacts[Math.floor(Math.random()*restContacts.length)];
  /*const clickToAdd = (additionalContact.index) => {
    firstFiveContacts.push(additionalContact.index);
    setContactsArr(firstFiveContacts)};*/

  return ( <div className="App">
  <h2>IronContacts</h2>
{/*
 <button onClick={() => clickToAdd(additionalContact.index)} className="addRandomContact">
  Add Random Contact 
      </button> 
     
  <button onClick={() => 
      firstFiveContacts.sort()
       setContactsArr(firstFiveContacts)} 
       className="btn-sortByName">
       Sort by popylarity </button>   
       
       */} 

   <table>
        <tr>
            <th className="pic">Picture</th>
             <th className="name">Name</th>
             <th className="popularity">Popularity</th>  
             <th className="wonOscar">Won an Oscar</th>
             <th className="wonEmmy">Won an Emmy</th>
          </tr>
          </table>
          
  {firstFiveContacts.map((contact, index) => (
    <table>
          <tr  key={ index}>
             <td className="pic"> <img className="profilePic" src={contact.pictureUrl}/></td>
             <td className="name">{contact.name}</td>
             <td className="popularity">{contact.popularity}</td>  
             {contact.wonOscar ? <td className="wonOscar">🏆</td>  : <td className="wonOscar"> not yet</td> }
             {contact.wonEmmy ? <td className="wonEmmy">🏆</td>  : <td className="wonEmmy"> not yet</td> }

             
             
          </tr>
        </table>
        
      ))}
  </div>
  )
}
export default App;
