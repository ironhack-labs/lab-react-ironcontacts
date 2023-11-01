import "./App.css";
import contactsJSON from "./contacts.json"
import React, {useState} from 'react';

function App(props) {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
  const [showContacts, setShowContacts] = useState(true)
  const randomContacts = () => {
    let randomContact;
    let exists;
    do {
      
      const randomIndex = Math.floor(Math.random() * contactsJSON.length);
      randomContact = contactsJSON[randomIndex];
      
      exists = contacts.some(contact => contact.id === randomContact.id);
    } while (exists); 
    setContacts(contacts => [...contacts, randomContact]);
  }
  const sortByPopularity = () => {
    setContacts(contacts => [...contacts].sort((a, b) => b.popularity - a.popularity));
  };
  const sortByName = () => {
    setContacts(contacts => [...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const deleteContact = (id) => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContacts}>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index)=>{
          return(<tr key={index}>
            <td>
              <img src={contact.pictureUrl} width="75px"></img>
            </td>
            <td>{contact.name}</td>
            <td>{Math.round(contact.popularity * 100) / 100}</td>
            <td>{contact.wonOscar? "🏆" : ""}</td>
            <td>{contact.wonEmmy? "🌟":""}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        )})}
      </tbody>
      </table>
    </div>
  );
}

export default App;
