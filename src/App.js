// src/App.js
import "./App.css";
import { useState } from "react"
import contacts from "./contacts.json";

const contactsCopy = [...contacts]
const fiveContacts = contactsCopy.splice(0,5)



function App() {
  const [contacts, setContacts] = useState(fiveContacts);

  const popularity = contacts.popularity;

console.log(contacts)

  return (
    <div className="App">
     

      <table>
        
        <tbody>
        <h1 >IronContacts</h1>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populiarity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr>
                <div>
                  <img className="contactImg" src={contact.pictureUrl} alt="" />
                </div>
                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
                <th>{contact.wonOscar ? <p>🏆</p> : <p></p>}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;