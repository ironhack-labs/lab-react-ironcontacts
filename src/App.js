import "./App.css";
import contactsList from "./contacts.json";
import React, { useState } from 'react';

function App() {


  const [fiveContacts] = useState(contactsList.slice(0, 5));
  const [contacts, updateContacts] = useState(fiveContacts);

  const addContact = () => {
    let contactStart = contactsList.slice(5);
    let randomContact = Math.floor(Math.random() * contactStart.length);
    const newContact = contactStart[randomContact];
    const updatedContacts = [...contacts, newContact];
    updateContacts(updatedContacts);
  };


  return <div className="App">
 
  <button onClick={addContact}>Add Random Contact</button>
    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar  </th>
            <th>  Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>

              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🏆" : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
}

export default App;

