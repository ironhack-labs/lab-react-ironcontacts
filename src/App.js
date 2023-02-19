import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsList, setContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter((contact) => {
      return contact.id !== contactsList.id;
    });
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    const newContactsList = [...contactsList];
    newContactsList.push(randomContact);
    setContacts(newContactsList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <div className="table">
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {contactsList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
