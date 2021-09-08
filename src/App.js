import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactsTable from "./components/ContactsTable/ContactsTable";

const App = () => {
  const [firstArr, setContactList] = useState(contacts.slice(0, 5));
  const [largerArr, setArr] = useState(contacts.slice(5));

  // Generates random contact from larger array
  const randomContact = largerArr[Math.floor(Math.random() * largerArr.length)];
  
  // Add Random Contact from largerArr to firstArr
  const addRandomContact = () => setContactList([...firstArr, randomContact]);
  
  // Sorts firstArr by name ascending
  const sortByName = () =>  setContactList([...firstArr].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)));
  
  // Sorts firstArr by popularity descending
  const sortByPop = () =>  setContactList([...firstArr].sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0)));
  
  // Deletes contact
  const deleteContact = (contactId) => setContactList([...firstArr].filter(contact => contact.id !== contactId));
  
  return (
    <div className="app">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPop}>Sort By Popularity</button>
      <ContactsTable 
        contactList={firstArr}
        deleteContact={deleteContact}        
      />
    </div>
  );
};

export default App;