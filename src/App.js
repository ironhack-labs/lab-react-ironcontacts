import React, { useState } from 'react';
import contacts from './contacts.json';
import './App.css';

const contactState = contacts.splice(0,5);

function App() {
  const [ contact, setContact ] = useState(contactState)
  const randomContactHandler = () => {
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomNumber];
    const contactsCopy = [...contact];
    contactsCopy.push(randomContact);
    setContact(contactsCopy);
  };

const sortName = () => {
  const sortedContacts = [...contact];
  sortedContacts.sort((a,b) => {
    let firstName = a.name.toUpperCase();
    let secondName = b.name.toUpperCase();
    if (firstName < secondName) { return -1; }
    if (firstName > secondName) { return 1; }
    return 0;
     })
     setContact(sortedContacts);
    };

const sortPopularity = () => {
  const sortedPopularity = [...contact];
  sortedPopularity.sort((a,b) => {
    let firstPopularity = a.popularity;
    let secondPopularity = b.popularity;
    if (firstPopularity < secondPopularity) { return -1; }
    if (firstPopularity > secondPopularity) { return 1; }
    return 0;
  }) 
  setContact(sortedPopularity);
    };

 const deleteContact = (contactId) => {
   const contactsCopy = [...contact];
   const contactIndex = contactsCopy.findIndex(
     (contact) => contact.id === contactId
   );
   contactsCopy.splice(contactIndex, 1);
   setContact(contactsCopy);
 };
  return (
    <div className="App">
      <button onClick={() => randomContactHandler()}>Add Random Contact</button>{' '}
      <button onClick={() => sortName()}>Sort by Name</button>{' '}
      <button onClick={() => sortPopularity()}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {contact.map((contactItem) => (
          <tr>
            <th>
              <img src={contactItem.pictureUrl} alt="artist" className="images"/>
            </th>
            <th>{contactItem.name}</th>
            <th>{contactItem.popularity.toFixed(2)}</th>
            <th><button onClick={() => deleteContact(contactItem.id)}>Delete</button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
