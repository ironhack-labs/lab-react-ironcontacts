import './App.css';
import { useState } from 'react';
import contactsArr from './contacts.json';

function App() {

  let fiveContacts = contactsArr.slice(0, 5);

  const [contacts, setContacts] = useState(fiveContacts);

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(element => {
              return (
                <tr>
                  <td><img src={element.pictureUrl} alt="" width="100px"/></td>
                  <td>{element.name}</td>
                  <td>{element.popularity.toFixed(2)}</td>
                  <td>{element.wonOscar ? '🏆' : ''}</td>
                  <td>{element.wonEmmy ? '🏆' : ''}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;

// JSON.parse(JSON.stringify)