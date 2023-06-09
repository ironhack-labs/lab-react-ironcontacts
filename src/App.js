import './App.css';
import { useState } from 'react';
import contactsJSON from './contacts.json'
import Contact from './Contact';

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 4));

  const addRandomContact = () => {
    if (contacts.length === contactsJSON.length) {
      return;
    }

    const notInContactList = contactsJSON.filter(contact => !contacts.includes(contact))
    const randomContact = notInContactList[Math.floor(Math.random() * notInContactList.length)];

    setContacts([...contacts, randomContact]);
  }

  const sortContactsByName = () => {
    const sortedContacts = [...contacts].sort((next, current) => next.name.localeCompare(current.name));
    setContacts(() => sortedContacts);
  }
 
  const sortContactsByPopularity = () => {
    const sortedContacts = [...contacts].sort((next, current) => current.popularity - next.popularity);
    setContacts(() => sortedContacts);
  }

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId)
    setContacts(() => updatedContacts);
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortContactsByName}>Sort by name</button>
      <button onClick={sortContactsByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { contacts.map(contact => {
            return <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
