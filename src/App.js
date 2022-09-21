import "./App.css";
import contactlist from "./contacts.json";
import { useState } from "react";
import addRandomContacts from "./components/addRandomContacts";

function App() {
  const contact = contactlist.slice(0, 7);
  const [contacts, setContacts] = useState(contact);
  console.log(contact);

  return (
    <div className="App">
      <addRandomContacts />

      <h1>Iron Contacts</h1>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td className="contactList">
                <img src={contact.pictureUrl} alt="{contact.name}" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆🏆" : "❌"}</td>
              <td>{contact.wonEmmy ? "🏆🏆" : "❌"}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
