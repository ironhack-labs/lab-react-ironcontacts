// import logo from './logo.svg';
import contactsMovie from "./contacts.json";
import { useState } from "react";

import "./App.css";

function App() {
  const fiveContacts = contactsMovie.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  console.log("5 contacts:" + fiveContacts);

  return (
    <div className="App">
      <h2>Iron Contacts</h2>

      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>

      {fiveContacts.map((contacts) => {
        return (
          <div key={contacts.id}>
            <table>
              <tr>
                <td>
                  <img src={contacts.pictureUrl} alt="image" />
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
