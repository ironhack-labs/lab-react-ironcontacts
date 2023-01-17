import "./App.css";
import contactsFromDB from "./contacts.json";
import { useState } from "react";
const copy = [...contactsFromDB];
const displayedContacts = copy.splice(0, 5);
const remainingContacts = copy;
function App() {
  const [contact, setContact] = useState(displayedContacts);
  function addContact() {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1)[0];
    if (remainingContacts.length > 0) {
      setContact([...contact, randomContact]);
    }
  }

  return (
    <div className="App">
      <table>
        <tbody>
          {contact.map((contact) => {
            const wonOscar = contact.wonOscar ? true : false;
            const wonEmmy = contact.wonEmmy ? true : false;
            return (
              <tr key={contact.name}>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {!wonOscar && <td>NO</td>}
                {!wonEmmy && <td>NO</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          addContact();
        }}
      >
        Add Random Contact
      </button>
      <button>Sort by Name</button>
      <button>Sort by Popularity</button>
    </div>
  );
}
export default App;
