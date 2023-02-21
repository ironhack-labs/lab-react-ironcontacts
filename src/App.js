
import './App.css';
import contacts from "./contacts.json";
import React, {useState} from "react";

function App() {
 const [contactList, setContactList] = useState(contacts.slice(0,5));
 const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

 const addRandomContact = () => {
  if (remainingContacts.length === 0) {
    alert('There are no more contacts to add!');
    return;
  }
  const randomIndex = Math.floor(Math.random() * remainingContacts.length);
  const newContact = remainingContacts[randomIndex];
  setContactList(prevContacts => [...prevContacts, newContact]);
  setRemainingContacts(prevContacts => prevContacts.filter(contact => contact.id !== newContact.id));
};
 
const sortByName = () => {
  const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
  setContactList(sortedContacts);
};
const sortByPopularity = () => {
  const sortedContacts = [...contactList].sort((a, b) => b.popularity - a.popularity);
  setContactList(sortedContacts);
};
const deleteContact = (id) => {
  const updatedContacts = contactList.filter(contact => contact.id !== id);
  setContactList(updatedContacts);
};




 return (
    <div className="App">
    <h3>IronContacts</h3>
    <div class="buttons">
    <button onCLick={addRandomContact}>Add Random Contact</button>
    <button onCLick={sortByPopularity}>Sort by popularity</button>
    <button onCLick={sortByName}>Sort by Name</button>
    </div>
    <table>
      <thead>
       <tr>
       <div class="row">
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won <br></br>
            Oscar</th>
        <th>Won<br></br>
            Emmy</th>
        <th>Actions</th>
        </div>
       </tr>
      </thead>
      <tbody class="body">
        {contactList.map((contact)=> (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            
            <td>{contact.wonOscar}</td>
            <td>{contact.wonEmmy}</td>
            <td>

              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
          
      </tbody>
    </table>
    </div>
  );
}

export default App;
