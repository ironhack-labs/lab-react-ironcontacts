import React, { Component, useState} from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import './App.css';

function App() {
  const [contact, setContacts] = useState(contacts.slice(0,5)) //pick up first 5 contacts
  const randomlySelectContacts = () =>{
    const nextContact = contacts.slice(contact.length, contact.length+1) // adding new 6th contact
    setContacts([...contact,...nextContact]) //sets state
  // console.log(contacts)
  } 

  const sortByName = () =>{
    console.log('sorting...')
    const sortedArray = contact.sort((a,b)=>{
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if(nameA<nameB) return -1;
      if(nameA>nameB) return 1;
      return 0;
    })
    console.log(sortedArray)
    setContacts([...sortedArray])
  // console.log(contacts)
  } 

  const sortByPopularity = () =>{
    const sortedArray = contact.sort((a,b)=>{
      return a.popularity-b.popularity
    })
    setContacts([...sortedArray])
  // console.log(contacts)
  } 

  const deleteContact = (id) =>{
    const sortedArray = contact.filter(c=>c.id!=id)
    setContacts([...sortedArray])
  // console.log(contacts)
  } 

  return (
    <div className="container">
      <button onClick={randomlySelectContacts}> Add Random Contact</button>
      <button onClick={sortByName}> Sort By Name</button>
      <button onClick={sortByPopularity}> Sort By Popularity</button>
      <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th></th>
        </tr>
          {contact.map(c => ( <tr key={c.id}> 
            <td> <img height ="60" src = {c.pictureUrl}/></td>
            <td>{c.name}</td>
            <td>{c.popularity.toFixed(0)}</td> 
            <td><button onClick={()=> deleteContact(c.id)}> Delete </button></td>
            </tr>))}
        </table>

    </div>
    );
  }

export default App;
