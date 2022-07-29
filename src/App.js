import contactsData from './contacts.json'
import {useState} from 'react'
import './App.css';

function App() {
  const contactsFiltered = contactsData.slice(0,5)
  const [contacts , setContacts] = useState(contactsFiltered)
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact ,  index) => (
            <tr key={index} >
              <td> <img src={contact.pictureUrl} alt="contact" width="100" /> </td>
              <td> {contact.name} </td>
              <td> {contact.popularity.toFixed(2)} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

