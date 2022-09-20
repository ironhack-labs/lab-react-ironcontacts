import logo from "./logo.svg";
import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

console.log(contactsArr);
console.log(contactsArr.slice(0, 5));

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {contacts.map((contact) => (
          <tr>
            <td>
              <img style={{ height: "200px" }} src={contact.pictureUrl}></img>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
