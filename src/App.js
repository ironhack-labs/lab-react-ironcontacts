import './App.css';
import contacts from './contacts.json'
import { useState } from 'react';
import 'bulma/css/bulma.css'


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

  const handleDelete = (contactToDelete) => {

    let filteredContacts = myContacts.filter((contact) => {
      return contact.id !== contactToDelete
    })
    updateContacts(filteredContacts)
  }

  return (
    <> 
    <h1>IronContacts</h1>
    <button class="button is-small is-rounded is-warning" onClick={handleAddRandom}>Add Random Contact</button>
    <button class="button is-small is-rounded is-link" onClick={() => handleSort('name')}>Sort By Name</button>
    <button class="button is-small is-rounded is-link" onClick={() => handleSort('popularity')}>Sort By Popularity</button>

    <table class="table is-narrow ">
      <thead>
        <tr >
        <th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        myContacts.map((contact) => {
        return (
          <>
          <tr key={contact.id} class="is-vcentered">
          <th><img class="headshot" src={contact.pictureUrl} alt={contact.name} /></th>
          <th> {contact.name}</th>
          <th> {contact.popularity}</th>
          <th><button class="button is-small is-rounded is-outlined is-danger" onClick={ () => handleDelete(contact.id) }>Delete</button></th>
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
