import { useState } from 'react';
import './App.css'
import contactsData from "../contacts.json"
import ContactsList from './ContactsList/ContactsList';

function App() {
  const contactsArr = contactsData.slice(0, 5)

  const [contacts, setContacts] = useState(contactsArr)

  const addContact = () => {
    let newContact = contacts[0]
    while (contacts.includes(newContact)) {

      newContact = contactsData[Math.floor(Math.random(contactsData.length))]
    }
    const contactsCopy = [...contacts]
    contactsCopy.unshift(newContact)
    setContacts(contactsCopy)
  }

  return (
    <div className="App">
      <ContactsList contacts={contacts} addContact={addContact} />
    </div>
  );
}

export default App;
