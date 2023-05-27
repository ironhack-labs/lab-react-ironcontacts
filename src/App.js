import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {
  const [fiveContacts, setFiveContacts] = useState(contacts.slice(0, 5));
  

  const generatingRemainingContacts = ((contacts) => {
    for (let i = 0; i <= 5; i++) {
      contacts.shift();

    }
    return;
    
  });
 console.log(generatingRemainingContacts(contacts));
  const remainingContacts = generatingRemainingContacts(contacts);
 

  const newContactIndex = Math.floor(Math.random() * remainingContacts.length);
  const newContact = remainingContacts[newContactIndex];
 


  const hasOscar = (elem) => {
    if (elem) {
      return <p>🏆</p>;
    }
  }
  const hasEmmy = (elem) => {
    if (elem) {
      return <p>🏆</p>;
    } 
  }

  return (
    <div className="App">
      {/* <button onClick={randomContact}>Add random contact</button> */}
      


      
      <table>
        <thead> 
         
          <th colSpan="3">IronContacts</th>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>

          </tr>

        </thead>
        <tbody>
          
          
             {fiveContacts.map(contact => {
               return <tr> <td>  <img alt="pic" src={contact.pictureUrl}/> </td>
                 <td>{contact.name}</td>
                 <td>{contact.popularity} </td>
                 <td> {hasOscar(contact.wonOscar)}   </td>
                 <td>{hasEmmy(contact.wonEmmy)}</td>
               </tr>
                 ;
             })}
          
          
          
          

        </tbody>

      
     
      </table>
     
    </div>
  );
}

export default App;