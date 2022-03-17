import contactsJSON from "./contacts.json";
import './App.css';
import { useState } from "react";


function App() {

  const [contacts, setContacts] = useState(contactsJSON.slice(0,5))


  const addNewContact = () => {
    let newContactIndex = Math.floor(Math.random() * contactsJSON.length);
    setContacts([...contacts, contactsJSON[newContactIndex]])
  }

  return (
    <div className="App">
      <button onClick={addNewContact}>Add Contact</button>
      <button onClick={() => setContacts(contacts.name.sort())}>Sort by name</button>
      <button onClick={() => setContacts(contacts.popularity.sort((a,b) => a - b))}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Emmy</th>
            <th>Won Oscar</th>
          </tr>
        </thead>
        {contacts.map((contact) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonEmmy ? "🏆" : ""}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                </tr>
              </tbody>
            </>
          )
        })}
      </table>
    </div>
  );
}

export default App;
