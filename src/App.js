import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {
  let fiveContacts = contactsArray.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  return <div className="App"><h1>IronContacts</h1>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(contact => {
          let imgContent;
          imgContent = <img src={contact.pictureUrl} alt={contact.name} className="contact-picture"/>
          return (
            <tr key={contact.id}>
              <td>{imgContent}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          )
      })}
      </tbody>
    </table>
  </div>;
}
export default App;
