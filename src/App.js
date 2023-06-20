// src/App.js

import {useState} from "react";
import "./App.css";
import contactsData from "./contacts.json";
import logo from "./logo.svg";

function App() {
  let firstFive = contactsData.slice(0,5)
  const [contacts, setContacts] = useState(firstFive);

  // add contact
  const addContact = (contact) => {
    const newContact = contactsData[Math.floor(Math.random()*contactsData.length)];
    contacts.push(newContact)
    console.log(newContact)
  }
  return(
  <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addContact(contactsData)}>Add Random Contact</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contactsData) => (          
          <tr key={contactsData.id}>
            <td><img src={contactsData.pictureUrl} alt={contactsData.name} style={{ height: "50px"}} /></td>
            <td>{contactsData.name}</td>
            <td>{contactsData.popularity.toFixed(2)}</td>
            <td>{contactsData.wonOscar ? "🏆" : null}</td>
            <td>{contactsData.wonEmmy ? "🏆" : null}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
 );
}
export default App;