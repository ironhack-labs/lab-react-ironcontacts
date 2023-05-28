import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {
  const [contactsList, setContacts] = useState(contacts);

  //  create array of 5 contacts 
  // const fiveContacts = contactsList.slice(5, 10);
  // console.log(fiveContacts);
  

  //delete function
const deleteContact = id => {
    const filteredContacts = contactsList.filter(contact => {
      return contact.id !== id;
    })
    setContacts(filteredContacts);
  };

  // const addContact = 



  // const generatingRemainingContacts = ((contacts) => {
  //   for (let i = 0; i <= 5; i++) {
  //     contacts.shift();
  //   }
  // });
//   const remainingContacts = generatingRemainingContacts(contacts);
//   const newContactIndex = Math.floor(Math.random() * remainingContacts.length);
//   const newContact = remainingContacts[newContactIndex];  
  
  

  const hasOscar = (elem) => {
    if (elem) {
      return <p>🏆</p>;
    }}
  const hasEmmy = (elem) => {
    if (elem) {
      return <p>🏆</p>;
    }}

  return (
    <div className="App">
      <button>Add random contact</button>
      <table>
        <thead> 
          <th colSpan="5">IronContacts</th>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
             {contactsList.map(contact => {
               return <tr key={contact.id}>  
               <td>  <img alt="pic" src={contact.pictureUrl} /> </td>
                 <td>{contact.name}</td>
                 <td>{contact.popularity} </td>
                 <td> {hasOscar(contact.wonOscar)}   </td>
                 <td>{hasEmmy(contact.wonEmmy)}</td>
                 <td><button onClick={ () => deleteContact(contact.id)} >Delete</button></td> 
               </tr>;
             })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
