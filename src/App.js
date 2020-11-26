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
    console.log(`RANDOM CONTACT IS ${randomContact}, contact is ${contacts}  NEW RANDOM IS ${newRandom}`);
    //! does not work... // -- > setContacts(firstContacts, newRandom);
  };

  return (
    <div className="App">
    <h1 className="title">IronContacts</h1>
    <div>
    <button onClick={addRandomContact()} className="random-btn">Add a Random Contact</button>
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
