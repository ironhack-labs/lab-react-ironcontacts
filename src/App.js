import { useState } from 'react';
import './App.css';
import contactsData from "./contacts.json"
import ContactList from './components/ContactList';
import AddRandomButton from './components/AddRandomButton';
import SortPopButton from './components/SortPopButton';
import SortNameButton from './components/SortNameButton';

const initialContacts = contactsData.slice(0,5)

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const sortByPop = () => { 
    const contactsCopy = JSON.parse(JSON.stringify(contacts))
    const sortedContacts = contactsCopy.sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedContacts)
  }
  
  const sortByName = () => {
    const contactsCopy = JSON.parse(JSON.stringify(contacts))
    const sortedContacts = contactsCopy.sort((a, b) => {
      if (a.name - b.name) return 1
      else if (a.name < b.name) return -1
      else return 0
    })
    setContacts(sortedContacts)
  }

  const newContact = () => {
    if (contactsData.length > 0) { 
      const randomNum = Math.floor(Math.random() * contactsData.length)
      const randomContact = contactsData.splice(randomNum, 1)
      setContacts([randomContact[0], ...contacts])
    }
  }
  
  const deleteContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id)
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
          <h2>IronContacts</h2>
          <div className='buttons'>
            <AddRandomButton contacts={contacts} newContact={newContact} />
            <SortPopButton sortMethod={sortByPop}/>
            <SortNameButton sortMethod={sortByName}/>
        </div>
        <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
