import React from 'react';
import './App.css';
import Contacts from './contacts.json';

function App() {
  const listOfContacts = Contacts.slice(0, 5);
  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <button>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {listOfContacts.map((contact) => (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt=""></img>
              </td>
              <td>
                <p>{contact.name}</p>
              </td>
              <td>
                <p>{contact.popularity.toFixed(2)}</p>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
