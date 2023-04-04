// src/App.js
import "./App.css";
import { useState } from "react"
import contacts from "./contacts.json";

const contactsCopy = [...contacts]
const fiveContacts = contactsCopy.splice(0,5)
const restOfContacts = contactsCopy.splice(5)
const updatedArray = [...fiveContacts]


console.log("rest of contacts",updatedArray )

function App() {
  const [contacts, setContacts] = useState(fiveContacts);

  const popularity = contacts.popularity;
  
  

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * restOfContacts.length);
    const randomContact = restOfContacts[randomIndex];
    const newContacts = [...contacts, randomContact];
    console.log("newContacts.....", newContacts);
    return setContacts(newContacts);
  };

  return (
    <div className="App">
     
     <button onClick={addRandomContact}>Add Random Contact</button>

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
                <th>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;