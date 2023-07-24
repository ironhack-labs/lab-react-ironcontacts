import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {

  const [fiveContacts] = useState(contacts.slice(0, 5));

  return <div className="App">
    <table>
        <thead>
          <tr>
          
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {fiveContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
}

export default App;

