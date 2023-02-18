import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./contacts.json";
const trophy = "🏆";

function App() {
  const firstFiveContacts = data.slice(0, 5);
  const remainingContacts = data.slice(5);

  const [contacts, setContacts] = useState(firstFiveContacts);

  const handleAddRandomContact = () => {
    const randomIndex = Math.ceil(Math.random() * remainingContacts.length);

    setContacts([...contacts, remainingContacts[randomIndex]]);
  };

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="contactImage" />
              </td>
              <td> {contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && trophy}</td>
              <td>{contact.wonEmmy && trophy}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
