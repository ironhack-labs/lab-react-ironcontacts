import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  //define randomContact
  let randomNumber = Math.floor(Math.random() * contactsJSON.length);
  let randomContact = contactsJSON.slice(6, contactsJSON.length - 1);
  // setContacts([...contacts, randomContact[randomNumber]]);

  // const [remainingContacts, setRemainingContacts] = useState(
  // );

  // const [contacts, setContacts] = useState("contacts");
  // const contacts = contactsJSON[0].name;

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => setContacts}>Add Random Contact</button>
      <p></p>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contacts.map((item) => {
          return (
            <tr>
              <td>
                <img height="100" src={item.pictureUrl} />
              </td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              <td>{item.wonOscar ? "🏆" : ""}</td>
              <td>{item.wonEmmy ? "🏆" : ""}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
