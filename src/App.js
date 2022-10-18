// src/App.js
import "./App.css";
import contactsArray from "./contacts.json";
import { useState } from "react";



function App() {

  const [contacts, setContacts] = useState(contactsArray);

  const fistFive = contacts.slice(0, 5);
  console.log(fistFive);


  return <div className="App" >
    <h1>IronContacts</h1>
    <table>
    <tr>
            <th><h3>Picture</h3></th>
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
          </tr>


      {fistFive.map((contact) => {

        return (
          <tr>
            <th><img src={contact.pictureUrl} /></th>
            <th><p>{contact.name}</p></th>
            <th><p>{contact.popularity}</p></th>
          </tr>
        )
      })}

    </table>
  </div>;
}

export default App;