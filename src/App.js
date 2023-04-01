import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  return (
    <div className="App">
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
          {contacts.map((contact, id) => (
            <tr key={id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar && <td>🏆</td>}
              {!contact.wonOscar && <td>No 🏆</td>}
              {contact.wonEmmy && <td>🎖️</td>}
              {!contact.wonEmmy && <td> No🎖️</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
