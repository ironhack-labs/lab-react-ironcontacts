import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';
import importedContacts from './contacts.json';

const contactsArray = importedContacts.splice(0, 5);

function App() {

  const [contacts, setContacts] = useState(contactsArray);

  const addRandomContact = () => {
    let copyContacts = [...contacts]
    let randomContact = '';
    
    do {
      randomContact = importedContacts[Math.floor(Math.random() * importedContacts.length)]
    } while (contacts.some(actor => actor.id === randomContact.id))

    const newContacts = copyContacts.push(randomContact)

    setContacts(copyContacts, newContacts);
  };

  const sortByPopularity = () => {
    let copyContacts = [...contacts]
    let sorted = copyContacts.sort((a,b) => b.popularity - a.popularity)
    setContacts(copyContacts, sorted)
  };

  const sortByName = () => {
    let copyContacts = [...contacts]
    let sorted = copyContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setContacts(copyContacts, sorted)
  };

  
  const deleteContact = (elementId) => {
    let copyContacts = [...contacts]
    let elementToDelete = copyContacts.findIndex((item) => item.id === elementId)
    let deleted = copyContacts.splice(elementToDelete, 1)
    setContacts(copyContacts, deleted)
  }
  

  return (
    <div className="App">
      <Contacts deleteContact={deleteContact} sortName={sortByName} sortPopularity={sortByPopularity} randomContact={addRandomContact} contacts={contacts}/>
    </div>
  );
}

export default App;
