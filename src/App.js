import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

// Storing the first 5 contacts from the contacts.json
const contacts = contactsArr.slice(0, 5);
const remainingContacts = contactsArr.slice(6, contactsArr.length);



function App() {
  const [contact, setContact] = useState(contacts);

//Iteration 3, add new Random Contacts
function getRandomContact() {
  const newContact = remainingContacts.splice(Math.floor(Math.random()*(remainingContacts.length - 1)), 1);
  const newList = contact.concat(newContact);
  setContact(newList);
}

//Iteration 4, Sort Contacts by Name and Popularity


  return (
    <div className="App">
      <button onClick={getRandomContact}>Add Random Contact</button>

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
          {contact.map(contact => {
            return(
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
                <td><span>{contact.name}</span></td>
                <td><span>{Math.round(contact.popularity * 100) / 100}</span></td>
                <td><span>{contact.wonOscar ? <img id="trophyIcon" src="../trophy.png" alt="Trophy Icon"></img> : ""}</span></td>
                <td><span>{contact.name}</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
