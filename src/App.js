import React, {useState} from 'react';

import contactsArray from './contacts.json';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(contactsArray.slice(0,5));
  console.log(contacts);
  return (
    <div className="App">
    {contacts.map((contact => 
    <p key={contact.id}>{contact.name}</p>
    ))}
    </div>
  );
}

export default App;
