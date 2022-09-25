// import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Contacts from "./contacts.json"
import { v4 as uuid } from "uuid"






function App() {

const [contacts,setContacts] = useState (Contacts.slice(0,5))

const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  };

const addContact = contactId => {
  let newContact = Contacts[Math.floor(Math.random() * Contacts.length)];
  const newContacts = [...contacts, newContact]
  setContacts(newContacts)

}


  const displayedContacts = contacts.map(contact=>{ 
    return(
    <tr key={uuid()} >
      <th>{contact.pictureUrl}</th>
      <th>{contact.name}</th>
      <th>{contact.popularity}</th>
      {contact.wonOscar && <th> 🏆</th>}
      {contact.wonEmmy&& <th> 🏆</th>}
      <button onClick={() => deleteContact(contact.id)} className="btn-delete">
        Delete 
      </button>
      
    </tr>

  )  })

  
//const [displayedContacts,setDisplayedContacts] = useState(firstFiveContacts)




  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>WOn Emmy</th>
        </tr>
        {displayedContacts}
      </table>
      <button onClick={() => addContact()} className="btn-add"> Add Contact </button>
    </div>
  );
}

export default App;
