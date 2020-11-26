import React, { useState } from 'react';
import './App.css';
import contactsSeed from './contacts.json';
import Contact from './components/contact'

function App() {
  const firstContacts = contactsSeed.slice(0,5);
  const [contacts, setContacts] = useState(firstContacts);

  const addRandomContact = () => {
    const contactsCopy = [...contacts];
    const randomContact = contactsSeed[Math.floor(Math.random() * contactsSeed.length)];
    const newRandom = contactsCopy.push(randomContact);
    //console.log(`RANDOM CONTACT IS ${randomContact}, contact is ${contacts}  NEW RANDOM IS ${newRandom}`);
    //! does not work... // -- > setContacts(firstContacts, newRandom);
  };

  const sortByName = () => {
    const contactsCopy = [...contacts];
    const sortedContacts = contactsCopy.sort((a, b) => {
    return b.name-a.name } );
    //console.log(`SORTED CONTACT ${sortedContacts}`);
    //! does not work... // -- > setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const contactsCopy = [...contacts];
    const sortedContactsPop = contactsCopy.sort((a, b) => {
    return b.popularity-a.popularity } );
    //console.log(`SORTED Popularity ${sortedContactsPop}`);
    //! does not work... // -- > setContacts(sortedContactsPop);
  };

  return (
    <div className="App">
    <h1 className="title">IronContacts</h1>
    <div>
    <button onClick={addRandomContact()} className="random-btn">Add a Random Contact</button>
    <button onClick={sortByName()} className="random-btn">Sort By Name</button>
    <button onClick={sortByPopularity()} className="random-btn">Sort By Popularity</button> 
    </div>
    <div className="contact-div">
    {firstContacts.map((contact, index) => 
      <Contact key={index} {...contact}/>
    )}
    </div>
    </div>
  );
}

export default App;
