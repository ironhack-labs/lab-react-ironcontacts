import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';



function App() {
  const [contactsList, setContacts] = useState(contacts.slice(0,10));



  //delete function
const deleteContact = id => {
    const filteredContacts = contactsList.filter(contact => {
      return contact.id !== id;
    })
    setContacts(filteredContacts);
  };


 //attempt at adding random contact 
  // const generatingRemainingContacts = ((contacts) => {
  //   for (let i = 0; i <= 5; i++) {
  //     contacts.shift();
  //   }
  // });
  // const remainingContacts = generatingRemainingContacts(contacts);
  // const newContactIndex = Math.floor(Math.random() * remainingContacts.length);
  // const newContact = remainingContacts[newContactIndex];
  // console.log(newContact)


  
  //not able to update the stave variable with setContacts when trying to sort by name
 
  
  const sort = () => {
    const copyArr = JSON.parse(JSON.stringify(contactsList))
    const sorted = copyArr.sort((a, b) => {
      if( a.name < b.name ){
    return -1;
  }
  if( a.name > b.name ){
    return 1;
  }
    return 0;
  
     
    })
    setContacts(sorted)

  };
  

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
      
      <button onClick={()=>sort()}>Sort by name</button>

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
