import "./App.css";
import React, {useState} from "react";
import ListOfContacts from "./components/ListOfContacts";
import contacts from "./contacts.json";

function App() {
  const fiveContacts = contacts.slice(0,20);
  const [initContacts, setInitContacts] = useState(0);



  return (
    <div className="App">
     <button onClick={() => setInitContacts(contacts[Math.floor(Math.random()*contacts.length)])}>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
        {
          fiveContacts.map((contact) =>{
            return (
          <tr>
            <td>
            <img src={contact.pictureUrl} alt={contact.name}/> </td>
            <td> {contact.name}</td>
            <td> {contact.popularity}</td>
            <td>{contact.wonOscar === true ? '🏆' : null}</td> 
            <td>{contact.wonEmmy === true ? '🏆' : null}</td> 
          </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
