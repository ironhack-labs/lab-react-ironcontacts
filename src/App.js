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
    function addRandomContact(){
        const randomContact = contactsJson[Math.floor(Math.random()* contactsJson.length)]
        setContacts([randomContact, ...contacts])
    }
  // arr.sort((a,b)=>a-b); con este no funciona... hay que usar localCompare 
  //items.sort(function (a, b) {
  // return a.localeCompare(b);
  //  });


  function sortContacts(){
      const sortContact = contacts.sort((a,b) => a.name.localeCompare(b.name))
      setContacts([...sortContact])
  }


  // arr = arr.filter(function(el){
  //   return el.url !== "link 2";
  // });
  function deleteContact({target}){
      const deletedContact = contacts.filter((element) => element.id !== target.id)
      setContacts([...deletedContact])
  }


  return (
    <div className="App">
    <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Emmy</th>
            <th>Won Oscar</th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          return (
            <>
              <tbody>
                <tr>
                  <td><img src={contact.pictureUrl} style={{ width: "100px"}}></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {/* si tiene ? si no tiene :  */}
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                </tr>
                <button id={contact.id} onClick={deleteContact}>Delete Contact</button>
              </tbody>
            </>
          )
        })}
      </table>
      
      <button onClick={addRandomContact}>Add Contact</button>
      <button onClick={sortContacts}>Order Contacts</button>
      
    </div>
  );
}

export default App;




