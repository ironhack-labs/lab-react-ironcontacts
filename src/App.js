import './App.css';
import {useState} from 'react'
import contactsData from './contacts.json'

function App() {
  
  const [contacts, setContacts] = useState(contactsData.slice(0,5))
  
  const addRandomContact = () => {
    const filteredContacts = contactsData.filter(contact => !contacts.includes(contact))
    const randomNumber = Math.floor(Math.random()*filteredContacts.length)
    
    setContacts([...contacts, filteredContacts[randomNumber]])
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar? <p>🏆</p>:<p>✖️</p>}</td>
                <td>{contact.wonEmmy? <p>🏆</p>:<p>✖️</p>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
