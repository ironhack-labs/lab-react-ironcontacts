import React, { useState } from'react';
import "./App.css";
import contactsJSON from "./contacts.json";

function App() {
  const allContacts = contactsJSON; 
  const [contacts, setContacts] = useState (allContacts.slice(0,5));
  const [remainingContacts, setRemainingContacts] = useState (allContacts.slice(0,5));

  const addRandomContact = () => {
  const updatedRemaining = [... remainingContacts];

  let randomIndex = Math.floor(Math.random()*remainingContacts.length);
  let randomContact = updatedRemaining.slice(randomIndex, randomIndex +1)[0];

  const updatedContacts = [... contacts, randomContact];

  setContacts(updatedContacts);
  setRemainingContacts(remainingContacts);

  }
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick = {addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstContacts.map((contact, index)=>(
            <tr key = {index}>
              <td>
                <img src={contact.pictureUrl} style={{ width: '60px', height: '75px'}}/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar? <p>🏆</p>:<p> </p>}</td>
             <td>{contact.wonEmmy? <p>🌟</p>:<p> </p>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


/* const allContacts = contactsJSON; 
  const [contacts, setContacts] = useState (allContacts.slice(0,5));
  const [remainingContacts, setRemainingContacts] = useState (allContacts.slice(0,5));

  const addRandomContact = () => {
  const updatedRemaining = [... remainingContacts];

  let randomIndex = Math.floor(Math.random()*remainingContacts.length);
  let randomContact = updatedRemaining.slice(randomIndex, randomIndex +1)[0];

  const updatedContacts = [... contacts, randomContact];

  setContacts(updatedContacts);
  setRemainingContacts(remainingContacts);

  }*/


/*const allContacts = contactsJSON;
  const remainingContacts = allContacts.slice(5); 
  const firstContacts = allContacts.slice(0,5);
  const [contacts, setContacts] = useState (allContacts.slice(0,5));
  const addRandomContact = () => {
    if (remainingContacts.length>0){
      const randomIndex = Math.floor(Math.random()*remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      const newAllContacts = [...contacts, randomContact];

      setContacts(newAllContacts)

      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);
      remainingContacts(updatedRemainingContacts);
    }
  }*/