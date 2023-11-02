import "./App.css";
import contactsJSON from "./contacts.json"
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsJSON.slice(5, contactsJSON.length))

function addRandomContact() {
    // make a copy of the remaining contacts
    const updateRemaining = [...remainingContacts];

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    // remove a random element from the copy
    let randomContact = updateRemaining.slice(randomNum, randomNum + 1)[0]
    console.log(randomContact);

    // Note: slice is used to remove an element from the updateRemaining array based
    // on the randomNum index. This element will be stored in randomContact.
    // The slice method here removes one element starting at the randomNum index, and excluding the randomNum +1
    // returns an array with that removed element.
    // Accessing the [0] index retrieves the actual removed element.

    // add that contact to a new array
    const updatedContacts = [...contacts, randomContact];
    // update the contacts and the remaining contacts with the corresponding arrays
    setContacts(updatedContacts);
    setRemainingContacts(updateRemaining);
  }

return (
  <div className="App">
    <h1>IronContacts</h1>
    <button onClick={()=> addRandomContact()}>Add random contact</button>
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
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>
              <img
                src={contact.pictureUrl}
                alt={contact.name}
                style={{width: '50px'}}
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar? <p>🏆</p>:<p></p>}</td>
            <td>{contact.wonEmmy? <p>🌟</p>:<p></p>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default App;
