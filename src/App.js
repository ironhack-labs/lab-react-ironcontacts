import './App.css';
import contactsInfo from './contacts.json'
import React, { useState } from 'react';

const firstFiveContacts = contactsInfo.slice(0,5)

function App() {

  const [contacts, setContacts] = useState(contactsInfo);

  return (
    <div className="App">
      <table>
        <ul>
          {firstFiveContacts.map(contact =>{
            return <li key={contact.id}>
                    <img src={contact.pictureUrl} ></img>
                    <h4>{contact.name}</h4>
                    <p>{contact.popularity}</p>
                  </li>
          })}
        </ul>
      </table>
    </div>
  );
}

export default App;
