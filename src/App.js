import "./App.css";
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));

  const addRandomContact = () => {
    let n = Math.floor(Math.random() * contactsList.length);
    setContacts([...contacts, contactsList[n]]);
  };

  function removeContactById(id) {
    const deletedContact = [...contactsList].filter((contact) => {
      return contact.id !== id;
    });
    setContacts(deletedContact);
  }

  const sortByName = () => {
    const contactsByName = [...contacts];

    contactsByName.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name);
    });
    setContacts(contactsByName);
  };

  const sortByPopularity = () => {
    const popularContacts = [...contacts];

    popularContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(popularContacts);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
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
          {contacts.map((individualContact) => {
            return (
              <tr>
                <td>
                  {" "}
                  <img
                    className="contactImg"
                    src={individualContact.pictureUrl}
                    alt="contact"
                  />
                </td>
                <td>{individualContact.name}</td>
                <td>{individualContact.popularity}</td>
                <td>{individualContact.wonOscar ? "🏆" : ""}</td>
                <td>{individualContact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    onClick={() => removeContactById(individualContact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
