import "./App.css";
import contactsData from "./contacts.json";
import { useState } from 'react';

function App() {
  const fiveContacts = contactsData.slice(0,5);

  const [showContacts, setContacts] = useState(fiveContacts);

  const addRandomContact = () => {
    const remainingContacts = contactsData.slice(5);
    const randomContactsIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContacts = remainingContacts[randomContactsIndex];
    setContacts((previousState) => [randomContacts, ...previousState]);
  }

  const sortByPopularity = () => {
    const byPopularity = [...contactsData].sort((a,b) => b.popularity - a.popularity);
    setContacts(byPopularity);
  }

  const sortByName = () => {
    const byName = [...contactsData].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(byName);
  }

  const deleteContact = (contactId) => {
    const updatedContacts = showContacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>React IronContacts</h1>
      <div id="buttons">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      </div>

      <div className="contactTable">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {showContacts.map((contact, index) => (
              <tr key={index}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : null}</td>
                <td>{contact.wonEmmy ? <p>🌟</p> : null}</td>
                <td>
                  {/* button to delete a contact */}
                  <button onClick={() => deleteContact(contact.id)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;