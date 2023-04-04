import './App.css';
import {useState} from 'react'
import contactsData from './contacts.json'

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0,4))

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
          {contacts.map(contact => {
            return (
              <tr>
                <td><img src={contact.pictureUrl} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar? <p>🏆</p>:<p>✖️</p>}</td>
                <td>{contact.wonEmmy? <p>🏆</p>:<p>✖️</p>}</td>
              </tr>
            )
          })}
      </table>
    </div>
  );
}

export default App;
