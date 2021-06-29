import React, {useState} from 'react';

import {generateKey} from './generateUniqueKey'
import contactsArray from './contacts.json';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0,5));
  
  const addRandomContact = () => {
    const randContact = contactsArray[Math.floor(Math.random() * contactsArray.length)];
    if (contacts.some(contact => contact.name === randContact.name)) {
      addRandomContact();
    } else {
      setContacts(prevContacts => [...prevContacts, randContact])
    }
  };

  const sortByNames = () => {
    const sortedContactsArray = contacts.sort((contact1, contact2) => (contact1.name < contact2.name) ? -1 : (contact1.name > contact2.name) ? 1 : 0);
    console.log(sortedContactsArray);
    setContacts((prevContacts) => [...sortedContactsArray]);
  };

  const sortByPopularity = () => {
    const sortedContactsArray = contacts.sort((contact1, contact2) => contact2.popularity - contact1.popularity);
    setContacts((prevContacts) => [...sortedContactsArray]);
  };

  const deleteContact = (id) => {
    const cleanArray = contacts.filter((contact) => contact.id !== id)
    setContacts((prevContacts) => [...cleanArray]);
  };

  return (
    <div className="App">
      <article className="App_table__wrapper">
        <h1>Contacts</h1>
        <section className="App_Buttons_wrapper">
          <button onClick={addRandomContact} >Get Random Contact</button>
          <button onClick={sortByNames} > Sort by Name</button>
          <button onClick={sortByPopularity} >Sort by Popularity</button>
        </section>
        <table id="contact_table" className="App_table">
          <thead>
            <tr>
              <th>Pic</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {contacts.map((contact => <tr key={generateKey(contact.id)}><td><img src={contact.pictureUrl} alt={contact.name} /></td><td>{contact.name}</td><td>{Math.floor(contact.popularity)}</td><td><button onClick={() => deleteContact(contact.id)}>Delete Contact</button></td></tr>))}
          </tbody>
        </table>
      </article>
    </div>
  )
}

export default App;
