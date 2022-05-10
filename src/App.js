import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

// Storing the first 5 contacts from the contacts.json
const fiveContacts = contactsArr.slice(0, 5);
const remainingContacts = contactsArr.slice(6, contactsArr.length);



function App() {
  const [contacts, setContacts] = useState(fiveContacts);

//Iteration 3, add new Random Contacts
const getRandomContact = () => {
  const newContact = remainingContacts.splice(Math.floor(Math.random()*(remainingContacts.length - 1)), 1);
  const newList = contacts.concat(newContact);
  setContacts(newList);
}

//Iteration 4, Sort Contacts by Name and Popularity
const sortByName = () => {
  const orderByName = [...contacts.sort((a,b) => (a.name > b.name) ? 1 : -1)];
  
  setContacts(orderByName);
};

const sortByPopularity = () => {
  const orderByPopularity = [...contacts.sort((a,b) => (a.popularity < b.popularity) ? 1 : -1)];
  
  setContacts(orderByPopularity);
};

// Iteration 5, delete contacts
const deleteContact = (idToRemove) => {
  setContacts(contacts.filter(contact => contact.id !== idToRemove));
}


  return (
    <div className="App">
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return(
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
                <td><span>{contact.name}</span></td>
                <td><span>{Math.round(contact.popularity * 100) / 100}</span></td>
                <td><span>{contact.wonOscar ? <img id="trophyIcon" src="../trophy.png" alt="Trophy Icon"></img> : ""}</span></td>
                <td><span>{contact.wonEmmy ? <img id="trophyIcon" src="../trophy.png" alt="Trophy Icon"></img> : ""}</span></td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
