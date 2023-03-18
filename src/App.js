import React from 'react';
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const filterContacts = contacts.slice(0, 5)

  return (
    <div className="App">
      <header>
      <h1>IronContacts</h1>
    </header>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {filterContacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <img className="contact-image" src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar && <p>🏆</p>}</td>
            <td>{contact.wonEmmy && <p>🏆</p>}</td>
          </tr>
        ))}
      </table>
    </div>
  );
        }
      
 export default App;