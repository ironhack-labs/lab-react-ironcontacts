import logo from './logo.svg';
import React from 'react'
import './App.css';
import contactsJson from "./contacts.json";


function App() {

  //cogemos los 5 primeros contactos
    const startContacts = contactsJson.slice(0, 5);

  // probando el useState de react, tambien podriamos poner arriba { useState }
    const [contacts, setContacts] = React.useState(startContacts);

    



  return (
    <div className="App">
     <table>
       <h1>IronContacts</h1>
       {contacts.map((contact) => (

        <p>{contact.name}</p> 

       ))}
       
       </table> 
      
      
    </div>
  );
}

export default App;
