import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData);

  const contactsFirstFive = contacts.map(contact => {
        return (
          <tr>
            <td><img src={contact.pictureUrl} alt={contact.name} /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
          </tr>
        );
      })  

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="contacts">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contactsFirstFive.slice(0,5)}
      </table>
    </div>
  );
}
export default App;