// src/App.js
import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  
  const [contactsArr, setContactsArr] = useState(contacts.slice(0,5));
  
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularuty</th>
            <th>Won <br></br> Oscar</th>
            <th>Won <br></br> Emmy</th>
          </tr>  
        </thead>
        <tbody>
          {contacts.map( (contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>
                {contact.name}
              </td>
              <td>
                {contact.popularity}
              </td>
              <td>
                {contact.wonOscar
                  ? <p>🏆</p>
                  : null
                }
              </td>
              <td>
              {contact.wonEmmy
                  ? <p>🏆</p>
                  : null
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
