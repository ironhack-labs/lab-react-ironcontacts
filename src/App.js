import contactsArr from './contacts.json';
import './App.css';
import { useState } from 'react';

function App() {
  let fiveContacts = contactsArr.slice(0, 5)
  console.log(fiveContacts);

  const [contacts, setContacts] = useState(fiveContacts);

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {
            contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
