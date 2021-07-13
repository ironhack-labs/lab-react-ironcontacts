import './App.css';
import contacts from './contacts.json'
import { useState } from 'react';


function App() {
  
  const fiveContacts = JSON.parse(JSON.stringify(contacts.slice(0,5)))
  const [myContacts, updateContacts] = useState(fiveContacts)
  
  const handleAddRandom = () => {
    const randomContact = contacts[(Math.floor(Math.random() * contacts.length))]
    updateContacts([...myContacts, randomContact])
  }
  return (
    <> 
    <h1>IronContacts</h1>
    <button onClick={handleAddRandom}>Add Random Contact</button>
    <table class="table">
      <thead>
        <tr>
        <th>Picture</th><th>Name</th><th>Popularity</th>
        </tr>
      </thead>
      <tbody>
      {
        myContacts.map((contact) => {
        return (
          <>
          <tr>
          <th><img height="50px" src={contact.pictureUrl} alt={contact.name} /></th>
          <th> {contact.name}</th>
          <th> {contact.popularity}</th>
          </tr>
          </>
        )
        })
      }
      </tbody>
    </table>
    </>
  );
}

export default App;
