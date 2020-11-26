import React from 'react';
import './App.css';
import contactsSeed from './contacts.json';
import Contact from './components/contact'

function App() {
  const firstContacts = contactsSeed.slice(0,5);
  //const [contacts, setContacts] = useState(firstContacts);


  return (
    <div className="App">
    <h1 className="title">IronContacts</h1>
    <div className="contact-div">
    {firstContacts.map((contact) => 
      <Contact key={contact.id} {...contact}/>
    )}
    </div>
    </div>
  );
}

export default App;
