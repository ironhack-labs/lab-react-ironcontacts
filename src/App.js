import './App.css';
import contactsJSON from './contacts.json'
import {useState} from "react"


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const addContact = (() => {
    contactsJSON.splice(0, 5);
    let randomCon = contactsJSON.splice([Math.floor(Math.random()*contactsJSON.length)], 1);
    
    let newContacts = contacts.slice(0).concat(randomCon);

    setContacts(newContacts)
  })

  const sortByPop = (() => {
    let newContacts = contacts.slice(0);

    let orderedCon = newContacts
    .sort((a, b) => (b.popularity - a.popularity));

    setContacts(orderedCon)
  })

  const sortByName = (() => {
    let newContacts = contacts.slice(0);

    let alfOrdered = newContacts.sort((a, b) => (b.name - a.name) ? 1 : -1);

    setContacts(alfOrdered)

  })

  const deleteContact = ((id) => {
    
  })


    
  return (
    <div className="App">

    <h2>Iron Contacts</h2>
    
    <button onClick={() => addContact()}>Add Random Contact</button>
    <button onClick={() => sortByPop()}>Sort by popularity</button>
    <button onClick={() => sortByName()}>Sort by name</button>
    
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
      {contacts.map((contact) =>  
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt="profile img"/></td>
          <td>{contact.name}</td>
          <td>{Math.floor(contact.popularity *100)/100}</td>
          <td>{contact.wonOscar ? <p>🏆</p> : <p>❌</p>}</td>
          <td>{contact.wonEmmy ? <p>🏆</p> : <p>❌</p>}</td>
          <td><button onClick={() => deleteContact({contact.id})}>Delete</button></td>

        </tr>
      )}
        </tbody>
      </table>

    
    </div>
  );
}

export default App;
