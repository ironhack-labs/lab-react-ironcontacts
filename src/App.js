import contactsData from './contacts.json'
import { useState } from 'react'
import ContactList from "./components/ContactList"
import AddRandomButton from './components/AddRandomButton'
import SortNameButton from './components/SortNameButton'
import SortPopButton from './components/SortPopButton'
import HeadTitle from './components/HeadTitle'

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
  
  const deleteContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id)
    setContacts(filteredContacts)
  }

  return (
    <div className="App">
      <HeadTitle />
      <div className='buttons'>
        <AddRandomButton contacts={contacts} newContact={newContact} />
        <SortPopButton sortMethod={sortByPop} />
        <SortNameButton sortMethod={sortByName} />
      </div>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App