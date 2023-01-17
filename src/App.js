import "./App.css";
import contactsFromDB from "./contacts.json";
import { useState } from "react";
const copy = [...contactsFromDB];
const displayedContacts = copy.splice(0, 5);
const remainingContacts = copy;
function App() {
  const [contact, setContact] = useState(displayedContacts);
  function AddContact() {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1)[0];
    if (remainingContacts.length > 0) {
      setContact([...contact, randomContact]);
    }
  }

  function SortByName() {
    setContact([...contact].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function SortByPopularity() {
    setContact(
      [...contact].sort(
        (b, a) => Math.floor(a.popularity) - Math.floor(b.popularity)
      )
    );
  }

  const DeleteContact = (idOfTheContactToDelete) => {

    const newListOfContacts = contact.filter( (contact) => {
      return contact.id !== idOfTheContactToDelete;
    });

    setContact(newListOfContacts);
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
                {wonOscar && <td>🏆</td>}
                {wonEmmy && <td>🏆</td>}
                <td>
                <button onClick={() => {DeleteContact(contact.id)}}>Delete this contact</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          AddContact();
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={() => {
          SortByName();
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          SortByPopularity();
        }}
      >
        Sort by Popularity
      </button>
    </div>
  );
}
export default App;
