import contactsData from './contacts.json'
import {useState} from 'react'
import './App.css';

function App() {
  const contactsFiltered = contactsData.slice(0,25)
  const [contacts , setContacts] = useState(contactsFiltered)
  console.log(contacts)

  return (
    <div className="App">
      <h1>IronContacts</h1>
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
          {contacts.map((contact) => (
            <tr key={contact.id} >
              <td> <img src={contact.pictureUrl} alt="contact" width="100" /> </td>
              <td> {contact.name} </td>
              <td> {contact.popularity.toFixed(2)} </td>
              <td> {contact.wonOscar ? '🏆' : null} </td>
              <td> {contact.wonEmmy ? '🏆' : null} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

