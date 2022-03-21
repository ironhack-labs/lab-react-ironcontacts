import logo from './logo.svg';
import React from 'react'
import './App.css';
import contactsJson from "./contacts.json";
import { useState } from "react"


function App() {

  //cogemos los 5 primeros contactos
    const startContacts = contactsJson.slice(0, 5);

  // probando el useState de react, tambien podriamos poner arriba { useState }
    const [contacts, setContacts] = useState(startContacts);

  // añadimos un contacto nuevo con un aleatorio con un Math random
    const addRandomContact = () => {
        const randomContact = contactsJson[Math.floor(Math.random()* contactsJson.length)]
        setContacts([randomContact, ...contacts])
    }
  // 


  return (
    <div className="App">
     <table>
       <h1>IronContacts</h1>
       {contacts.map((contact) => (
         <tr>
        <div>
          <td><img src={contact.pictureUrl} style={{ width: "100px"}}></img></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>

        </div>
        </tr>

       ))}
       
       </table> 
      
      <button onClick={addRandomContact}>Add Contact</button>
    </div>
  );
}

export default App;
