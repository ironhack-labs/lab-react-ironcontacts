import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [remainingContacts, setRemainingContacts] = useState([...contacts.slice(5)]);
  const [displayedContacts, setDisplayedContacts] = useState([...contacts.slice(0, 5)]);

  function getRandomContact() {
    const index = Math.floor(Math.random() * remainingContacts.length);
    const contact = remainingContacts[index];
    return contact;
  }

  function handleAddRandomContact() {
    const randomContact = getRandomContact();
    setDisplayedContacts([...displayedContacts, randomContact]);
    setRemainingContacts(remainingContacts.filter((contact) => contact !== randomContact));
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
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
        {displayedContacts.map((contact) => (
          <tbody key={contact.id}>
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonOscar && <td>🏆</td>}
              {contact.wonEmmy && <td>🏆</td>}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
