// src/App.js
import "./App.css";
import { useState } from "react";
import dataContacts from "./contacts.json";

function App() {

  const firstFiveContacts = dataContacts.filter((contact,idx)=> idx<5)
  

  const [contacts, useContacts] = useState(firstFiveContacts);

  console.log(contacts);

  return <div className="App">

<table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
{contacts.map(contact =>
{return (
  <tr>
    <td>
    <img src={contact.pictureUrl} alt="contacts[0].name" height={200}/>
    
    </td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
  </tr>
)})}
 


</table>

  </div>;
}
export default App;
