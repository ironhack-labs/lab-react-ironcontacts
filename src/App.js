// src/App.js
import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  let firstFive = contactsData.slice(0, 5);

  const [contacts, setContacts] = useState(firstFive);

  const deleteContact = (contactId) => {
    const newList = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(newList);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th></th>
          </tr>

          {firstFive.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="Profile" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>Yes🏆</p>}</td>
              <td>{contact.wonEmmy && <p>Yes🏆</p>}</td>
              <td>
                <button
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                >
                  Delete this contact
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
