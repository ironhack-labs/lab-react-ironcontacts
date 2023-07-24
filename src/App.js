import contactsData from './contacts.json'
import { useState } from 'react'
import ContactList from "./components/ContactList"

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5))
  
  console.log(contacts)

  return (
    <div className="App">
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App