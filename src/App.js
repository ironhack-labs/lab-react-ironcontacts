import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5))
  return <div className="App">
  <h1>IronContacts</h1>
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {contacts.map(contact => {
        return (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt="" /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
        )
      })}
    </table>
  </div>;
}
export default App;