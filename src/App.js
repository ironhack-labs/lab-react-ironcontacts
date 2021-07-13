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

  const handleSort = (sortType) => {
    const sortedContacts = JSON.parse(JSON.stringify(myContacts))
    sortedContacts.sort((a,b) => {
      if (a[sortType] > b[sortType]) { 
        return 1 
      } else if (a[sortType] < b[sortType]) { 
        return -1 
      } else {
        return 0
      }
  })
  updateContacts(sortedContacts)
}
  return (
    <> 
    <h1>IronContacts</h1>
    <button onClick={handleAddRandom}>Add Random Contact</button>
    <button onClick={() => handleSort('name')}>Sort By Name</button>
    <button onClick={() => handleSort('popularity')}>Sort By Popularity</button>

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
          <tr key={contact.id}>
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
