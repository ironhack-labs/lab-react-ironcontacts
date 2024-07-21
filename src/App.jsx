import "./App.css";
import Contact from "./components/Contact";
import contactList from './contacts.json'
import { useState } from 'react';

function App() {

const [contacts, setContacts] = useState(contactList.slice(0, 5));

function addRandom() {
  let newContacts = [...contacts];
  let randomIndex;
  let randomContact;


  do {
    randomIndex = Math.floor(Math.random() * contactList.length);
    randomContact = contactList[randomIndex];
  } while (newContacts.includes(randomContact));


  newContacts.push(randomContact);
  setContacts(newContacts);
}

function sortByName(){
  let newContacts = [...contacts]
  newContacts.sort((a,b)=>a.name.localeCompare(b.name))
  setContacts(newContacts)
}
function sortByPopularity(){
  let newContacts = [...contacts]
  newContacts.sort((a,b)=> b.popularity - a.popularity)
  setContacts(newContacts)
}

function removeContact(id) {
  let newContacts = contacts.filter(contact => contact.id !== id);
  setContacts(newContacts);
}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contacts.map((contact) => {
          return (
            <Contact key={contact.id} contact={contact} removeContact={removeContact}></Contact>
          )
        })}

      </table>
      <button onClick={addRandom}> Add Random</button>
      <button onClick={sortByName}> Sort by Name</button>
      <button onClick={sortByPopularity}> Sorty by Popularity</button>
    </div>
  );
}

export default App;
