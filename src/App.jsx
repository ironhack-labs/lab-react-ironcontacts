import "./App.css";
import contactsJSON from "./contacts.json";
import React, { useState } from 'react';

function App(props) {
  // Declaration of state variable
  const[contacts, setContacts] = useState(contactsJSON.slice(0,5));
  const[remainingContacts, setRemainingContacts] = useState(contacts.slice(5, contacts.length));
 

  function addRandomContact(){
    // Make a copy
    const updateRemaining = [...remainingContacts];

    // Get a random contact

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    // Remove random element
    let randomContact = updateRemaining.slice(randomNum, randomNum + 1)[0];

    const updatedContacts = [...contacts, randomContact];

    setContacts(updatedContacts);
    setRemainingContacts(remainingContacts);
  }

  const sortByName = () => {
    const byName = [...contacts].sort((a,b) => a.name.localeCompare(b.name))
    setContacts(byName);

  }
  const sortByPopularity = () => {
    const byPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContacts(byPopularity);
  }

  const deleteContact = (contactId) => {
    const updatedContacts = remainingContacts.filter(contact => {
      return contact.id !== contactId;
    })
    setContacts(updatedContacts);
  }

      return(
      <div className="App">
      <h1>Iron Contacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>

      <button onClick={sortByName}>Sort by name</button>

      <button onClick={sortByPopularity}>Sort by popularity</button>

      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index)=>{
            return(<tr key={index}>
              <td>
                <img src={contact.pictureUrl} width="75px"></img>
              </td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100 }</td>
              <td>{contact.wonOscar?"🏆":""}</td>
              <td>{contact.wonEmmy?"🏆":""}</td>
              <td><button onClick={() => deleteContact(contacts.id)} 
                  className="btn-delete">Delete</button></td>
            </tr>
            )})}
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
