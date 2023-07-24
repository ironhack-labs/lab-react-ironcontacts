import contactsData from './contacts.json'
import { useState } from 'react'
import ContactList from "./components/ContactList"
import AddRandomButton from './components/AddRandomButton'

const initialContacts = contactsData.splice(0, 5)

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  
  const newContact = () => {
    if (contactsData.length > 0) { 
      const randomNum = Math.floor(Math.random() * contactsData.length)
      const randomContact = contactsData.splice(randomNum, 1)
      setContacts([randomContact[0], ...contacts])
    }
  }

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <AddRandomButton contacts={contacts} newContact={newContact} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App