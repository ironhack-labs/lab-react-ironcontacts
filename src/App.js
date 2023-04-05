// src/App.js
import { useState } from "react";
import "./App.css";

import contacts from "./contacts.json";

function App() {

const [contactList, setContactList] = useState(contacts.slice(0,5));
const remainingContacts = contacts.slice(5);

function addRandomContact() {
  const randomContactIndex = Math.floor(Math.random() * remainingContacts.length);
  const randomContact = remainingContacts[randomContactIndex];
  setContactList([...randomContact]);
}

// function sortedByName() {
//   const sortedContacts = contacts.sort();
//   setContacts([...sortedContacts]);
// }

// function sortedByPopularity() {
//   const sortedContactsPopularity = contacts.sort();
//   setContacts([...sortedContacts]);
// }

// function deleteContact (index) {
//   const newContactsList = [...contacts];
//   newContactsList.splice(index,1);
//   setContacts(newContactsList);
// }




  return <div className="App">
      <h1>IronConttacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      {/* <button onClick={sortedByName}>Sort by Name</button> */}
      {/* <button onClick={sortedByPopularity}>Sort by Popularity</button> */}
    

       <table>
        <thead>
          <tr>
            <th> Picture  </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won an Oscar </th>
            <th> Won an Emmy </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {contactList.map((contact) => (
            <tr key={contact.Id}>
              <td>
                <img src={contact.pictureUrl} alt="{contact.name}" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '🏆' : null}</td>
              {/* <button onClick={deleteContact}>Delete</button> */}

            </tr>
         ))}
        </tbody>
      </table>
     
  </div>;
}

export default App;



