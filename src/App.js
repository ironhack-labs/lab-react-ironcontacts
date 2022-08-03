import contactsData from './contacts.json'
import {useState} from 'react'
import './App.css';

function App() {
  const contactsFiltered = contactsData.slice(0,5)
  const restContacts = contactsData.slice(5,contactsData.length)
  const randomContact = restContacts[Math.floor(Math.random() * restContacts.length)]
  
  const [contacts , setContacts] = useState(contactsFiltered)

  const handleRandom = () => {
    setContacts(prev => [...prev , randomContact])
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleRandom} >Add Random Contact</button>
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
              <td> <img src={contact.pictureUrl} alt="contact" width="50" /> </td>
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

