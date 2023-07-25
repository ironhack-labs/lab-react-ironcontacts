import { useState } from 'react';
import './App.css';
import contactsData from "./contacts.json"
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5));

  return (
    <div className="App">
       <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
