// src/App.js
import "./App.css";
import { useState } from "react";
import contactsFromJson from "./contacts.json";



function App() {
  const [contacts, setContacts] = useState(contactsFromJson.slice(0, 5));
  
  const addRandomContact = () =>{
    const indexRandom = Math.floor(Math.random() * (contactsFromJson.length - 0 + 1) + 0);
    const contactRandomCheck = contacts.find(element => element.id === contactsFromJson[indexRandom].id);
    if(!contactRandomCheck){
      return setContacts(previousArray => [...previousArray, contactsFromJson[indexRandom]]);
    } else{
      return
    }
    
  }

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={ () => {addRandomContact()} }>Add Random Contact</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won <br/>Oscar</th>
            <th>Won <br/>Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactObj) => {
            return (
              <tr key={contactObj.id}>
                <td><img src={contactObj.pictureUrl} alt={contactObj.name} /></td>
                <td>{contactObj.name}</td>
                <td>{contactObj.popularity}</td>
                {contactObj.wonOscar && <td>🏆</td>}
                {contactObj.wonEmmy && <td>🏆</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
