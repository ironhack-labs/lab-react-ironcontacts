// src/App.js
import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsToDisplay, setContacts] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));
  const addRandomClick = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setRemainingContacts((prevState) =>
        prevState.filter((contact) => contact.id !== randomContact.id)
      );
      setContacts((prevState) => [randomContact, ...prevState]);
    }
  };

  return (
    <div className="App">
      <button onClick={addRandomClick}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img style={{ width: 250, height: 375 }}  src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td style={{backgroundColor: "aliceblue" }}>{contact.name}</td>
              <td style={{backgroundColor: "antiquewhite"}}>{contact.popularity.toFixed(2)}</td>
              <td style={{backgroundColor: "aliceblue" }}>{contact.wonOscar ? "🏆" : ""} </td>
              <td style={{backgroundColor: "antiquewhite"}}>{contact.wonEmmy ? "🏆" : ""} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
