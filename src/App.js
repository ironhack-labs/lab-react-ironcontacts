import React from 'react'
import contactsData from './contacts.json';
import ContactList from './components/contactList/ContactList';

import './App.css';

const undisplayedContacts = contactsData.slice(0);
const firstFive = undisplayedContacts.splice(0, 5);

function App() {
  const  [ contacts, setContacts ] = React.useState(firstFive);
  const [ contactsLength, setContactsLength ] = React.useState(contacts.length)

  const addRandomContact = () => {
    const random = Math.floor(Math.random() * undisplayedContacts.length);
    const randomContact = undisplayedContacts[random]

    undisplayedContacts.splice(random, 1);

    // contacts.push(randomContact)

    //Sem o spread, o estado não é atualizado. Por quê?

    setContactsLength(contacts.length+1)
    setContacts([...contacts, randomContact])
  }

  const sortByName = () => { 
    // eslint-disable-next-line array-callback-return
    contacts.sort((a,b) => a.name.localeCompare(b.name));

    setContacts([...contacts])
    // console.log(sorted)
  }

  const sortByPopularity = () => {
    contacts.sort((a, b) => b.popularity - a.popularity)

    console.log(contacts)

    setContacts([...contacts])
  }



  React.useEffect(() => {
    console.log('on effect')
    const lastContact = document.querySelector('.lastContact')
    lastContact.scrollIntoView()
  }, [contactsLength])

  return (
    <div className="App">
    <h1>Iron contacts</h1>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
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
