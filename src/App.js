import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";


function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(allContacts.slice(5))

  function addRandomContact() {
    const numberOfRemainingContacts = remainingContacts.length
    if (numberOfRemainingContacts > 0) {
      const randomContactIndex = Math.floor(Math.random() * numberOfRemainingContacts)
      const randomContact = remainingContacts[randomContactIndex]
      setContacts([randomContact, ...contacts])
      const updatedRemainingContacts = remainingContacts.filter(remainingContact => remainingContact.id !== randomContact.id)
      setRemainingContacts(updatedRemainingContacts)
    }
  }

  return (
    <div className="App">
   <button onClick={addRandomContact}>Add Random Contact</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
  {contacts.map(contact =>
    <tr>
          <td><img className="photo" src={contact.pictureUrl} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar === true && <span>🏆</span>} </td>
          <td>{contact.wonEmmy === true && <span>🏆</span>}</td>
        </tr>
)}
      </table>
    </div>
  );
}


export default App;
