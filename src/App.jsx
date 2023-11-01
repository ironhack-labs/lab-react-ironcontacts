import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
  const [showContacts, setShowContacts] = useState(true)
  const randomContacts = () => {
    let randomContact;
    let exists;
    do {
      // Generate a random index and select a contact
      const randomIndex = Math.floor(Math.random() * contactsJSON.length);
      randomContact = contactsJSON[randomIndex];

      // Check if the random contact already exists in the contacts state
      exists = contacts.some(contact => contact.id === randomContact.id);
    } while (exists); // If exists, loop again until a new contact is found

    // Update the contacts state with the new contact
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
      <h1>LAB | React IronContacts</h1>
      
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
              <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {contacts.map((contact, index)=>{
            return(
          <tr key={contact.id}> 
              <td>
              <img src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar? "🏆" : null}</td>
              <td>{contact.wonEmmy? "🌟" : null}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>)
        })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
