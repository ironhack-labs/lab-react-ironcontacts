import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

const initialContacts = contactsJSON.splice(0, 5);

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const handleAddContact = () => {
    if (contactsJSON.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * contactsJSON.length);
    const newContact = contactsJSON.splice(randomIndex, 1)[0];
    setContacts([...contacts, newContact]);
  };
  const handleSortByPopularity = () => {
    let sortedContacts = contacts.toSorted((contact2, contact1) => contact1.popularity - contact2.popularity);
    setContacts(sortedContacts);
  };
  const handleSortByName = () => {
    let sortedContacts = contacts.toSorted((contact2, contact1) => contact2.name.localeCompare(contact1.name));
    setContacts(sortedContacts);
  };
  const handleDeleteActor = (id) => {
    const indexToRemove = contacts.findIndex((contact) => contact.id === id);
    console.log(indexToRemove);
    const contactsUpdated = contacts.toSpliced(indexToRemove, 1);
    setContacts(contactsUpdated);
  };
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="btn-container">
        <button onClick={handleAddContact}>Add Random Contact</button>
        <button onClick={handleSortByPopularity}>Sort by popularity</button>
        <button onClick={handleSortByName}>Sort by name</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="Picture profile" style={{ width: "75px" }} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar && "🏆"}</td>
                  <td>{contact.wonEmmy && "🌟"}</td>
                  <td>
                    <button onClick={() => handleDeleteActor(contact.id)}>Delete</button>
                  </td>
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
