import React from 'react';
import './App.css';
import Contacts from './contacts.json';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        {Contacts.map((contact) => (
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
        ;
      </table>
    </div>
  );
}

export default App;
