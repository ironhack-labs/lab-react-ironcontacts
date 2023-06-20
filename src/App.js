import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [allContacts, setAllContacts] = useState(contacts);
  const [contactsToDisplay, setContactsToDisplay] = useState(
    contacts.slice(0, 5)
  );

  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * allContacts.length);
    const randomContact = allContacts[randomIndex];
    setContactsToDisplay((prevContacts) => [...prevContacts, randomContact]);
  }

  function deleteContact(id) {
    setContactsToDisplay((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  return (
    <div className="App">
      <h1>Contacts</h1>
      <button className="btn" onClick={addRandomContact}>Add Random Contact</button>
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img className="image" src={contact.pictureUrl} alt="Profile" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <>🏆</> : <></>}</td>
              <td>{contact.wonEmmy ? <>🏆</> : <></>}</td>
              <td>
                <button className="btn" onClick={() => deleteContact(contact.id)}>
                  Delete
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
