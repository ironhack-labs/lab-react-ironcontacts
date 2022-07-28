import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json'
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5));

  const deleteContact = contactID => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactID
    });
    setContacts(filteredContacts);
  }

      return (
        <div className="App">
          <h2>IronContacts</h2>
          <button>Add Random Contact</button>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Delete button</th>
            </tr>
            { contacts.map(contact => {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar && <td>🏆</td>}
                  {contact.wonEmmy && <td>🏆</td>}
                  <td><button onClick={() => deleteContact(contact.id)}>Delete </button></td>
                </tr>
              )
            })

            }
          </table>
        </div>
      );
}

export default App;
