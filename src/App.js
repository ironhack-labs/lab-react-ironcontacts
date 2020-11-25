import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  //Iteration 1: State with only the first 5
 const fiveContacts = contacts.slice(0,5);
 const [contactsState, setContacts] = useState (fiveContacts);

//Iteration 2
function addRandomContacts(){
const randomContact = Math.floor(Math.random() * contacts.length)
  contactsState.push(contacts.[randomContact]);
  setContacts(current => [...current, contactsState]);
}

//Iteration 3 - sort by Name
function sortName(){
  contactsState.sort((a,b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  setContacts((current => [...current]))
}

//Iteration 3 - sort by Popularity
function sortPopularity(){
  contactsState.sort(function(a, b){
    return b.popularity-a.popularity})
    setContacts((current => [...current]))
}

//Iteration 4 - Remove contacts
function deleteContact(id){
  const index = contactsState.findIndex((contact)=>
  contact.id === id)
  contactsState.splice(index, 1)
  setContacts((current => [...current]))
}

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addRandomContacts}>Add Random Contact</button>
    <button onClick={sortName}>Sort by Name</button>
    <button onClick={sortPopularity}>Sort by Popularity</button>

    <table className="table">
    <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>
    </tr>
    </thead>
    {contactsState.map(item => ( 

      <tbody>
    <tr key={item.id}>
      <td><img className="img" src={item.pictureUrl} alt="Contact" /></td>
      <td>{item.name}</td>
      <td>{item.popularity}</td>
      <td><button onClick={deleteContact}>Delete</button></td>
</tr>
</tbody>
    ))} 
    </table>
    </div>

  );
}

export default App;
