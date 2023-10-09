import React, { useState } from 'react';
import './App.css';
import contactsData from './contacts.json';
import ContactList from './components/contactslist/contactlist.jsx';

function App() {
  const [contactList, setContactList] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    if (contactsData.length > contactList.length) {
      const remainingContacts = contactsData.filter(
        (contact) => !contactList.find((c) => c.id === contact.id)
      );
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContactList((prevContacts) => [...prevContacts, randomContact]);
    }
  };

  const sortByName = () => {
    const sortedList = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedList);
  };

  const sortByPopularity = () => {
    const sortedList = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedList);
  };

  const deleteContact = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedList);
  };


  return (
    <div className="App">
      <h1>Iron contacts</h1>
      <hr></hr>
      <button onClick={addRandomContact} className='border border-success'>Add Random Contact</button>
      <br></br>-
      <div className='card'>
        <ContactList
          contactList={contactList}
          onSortByName={sortByName}
          onSortByPopularity={sortByPopularity}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;