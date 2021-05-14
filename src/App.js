import React from 'react'
import contactsData from './contacts.json';
import ContactList from './components/contactList/ContactList';

import './App.css';

const undisplayedContacts = contactsData.slice(0);
const firstFive = undisplayedContacts.splice(0, 5);

function App() {
  const  [ contacts, setContacts ] = React.useState(firstFive);

  const addRandomContact = () => {
    const random = Math.floor(Math.random() * undisplayedContacts.length);
    const randomContact = undisplayedContacts[random]

    undisplayedContacts.splice(random, 1);

    // contacts.push(randomContact)

    //Sem o spread, o estado não é atualizado. Por quê?

    setContacts([...contacts, randomContact])

  }

  React.useEffect(() => {
    const lastContact = document.querySelector('.lastContact')
    lastContact.scrollIntoView()
  }, [contacts])

  return (
    <div className="App">
    <h1>Iron contacts</h1>
      { 
        undisplayedContacts.length ? 
          <button onClick={ addRandomContact }>Add random contact</button> : null
      }
      <ContactList>{contacts}</ContactList>
    <button onClick={ () => window.scrollTo(0,0)}>Go to list start</button>
    </div>
  );
}

export default App;
