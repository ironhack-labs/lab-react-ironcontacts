import { useState } from "react";
import "./App.css";
import contactList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactList.slice(5)
  );
  
  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContacts((prevContacts) => [randomContact, ...prevContacts]);
      /*setRemainingContacts((prevRemainingContacts) =>
      prevRemainingContacts.filter((contact, index) => index !== randomIndex))*/
      setRemainingContacts((prevRemainingContacts) => {
        const updatedRemainingContacts = [...prevRemainingContacts];
        updatedRemainingContacts.splice(randomIndex, 1);
        return updatedRemainingContacts;
      });
      console.log(remainingContacts)
    }
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px", height: "auto" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
              <td>{contact.wonEmmy ? <p>🌟</p> : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
