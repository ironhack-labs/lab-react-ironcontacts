import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5))
  return <div className="App">
  <h1>IronContacts</h1>
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
      {contacts.map(contact => {
        return (
          <tbody key={contact.id}>
            <tr>
              <td><img src={contact.pictureUrl} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar && <td>🏆</td>}
              {contact.wonEmmy && <td>🏆</td>}
            </tr>
          </tbody>
        )
      })}
    </table>
  </div>;
}
export default App;