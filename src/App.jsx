import "./App.css";
import contactsList from "./contacts.json"
import { useState } from "react"


function App() {

  const [contacts, setContacts] = useState(contactsList.slice(0, 5))

  function pickRandomContact(contactList) {
    if (contactList.length > 0) {
      const randomIndex = Math.floor(Math.random() * contactList.length);
      const selectedContact = contactList.splice(randomIndex, 1);
      return selectedContact[0];
    }
  }

  function addRandomContact() {
    const randomContact = pickRandomContact([...contactsList]);
    if (randomContact) {
      setContacts((oldContacts) => [randomContact, ...oldContacts]);
    }
  }

  function sortByName() {
    const mixContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(mixContacts); 
  }

  function sortByPopularity() {
    const mixContacts = [...contacts].sort((a, b) =>
      b.popularity - a.popularity
    );
    setContacts(mixContacts);
  }

  function deleteContact(id) {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contacts.map((contact) => (
            <tr key={contact.id}>
            <td>
              <img
                src={contact.pictureUrl}
                alt={contact.name}
                height={150}
                width={150}
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>
              {contact.wonOscar ? (
                <div>
                  🏆
                </div>
              ) : null}
            </td>
            <td>
              {contact.wonEmmy ? (
                <div>
                  🏆
                </div>
              ) : null}
            </td>
            <td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>

  );
}

export default App;
