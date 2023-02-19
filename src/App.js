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

  const sortByPopularity = () => {
    const popularityList = [...contactsList];
    // popularityList.sort((a, b) => a.localeCompare(b));
    popularityList.sort((a, b) => {
      if (a.popularity < b.popularity) return 1;
      else if (b.popularity < a.popularity) return -1;
      return 0;
    });
    setContacts(popularityList);
  };

  const sortByName = () => {
    const alphabeticalList = [...contactsList];
    alphabeticalList.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (b.name < a.name) return 1;
      return 0;
    });
    setContacts(alphabeticalList);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contactsList.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
    console.log(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={addRandomContact}
        className="btn btn-outline-secondary fs-6"
      >
        Add Random Contact
      </button>
      <button
        onClick={sortByPopularity}
        className="btn btn-outline-secondary fs-6"
      >
        Sort by popularity
      </button>
      <button onClick={sortByName} className="btn btn-outline-secondary fs-6">
        Sort by name
      </button>
      <div className="table">
        <table>
          <thead>
            <th className="fs-3">Picture</th>
            <th className="fs-3">Name</th>
            <th className="fs-3">Popularity</th>
            <th className="fs-3">Won Oscar</th>
            <th className="fs-3">Won Emmy</th>
            <th className="fs-3">Actions</th>
          </thead>
          <tbody>
            {contactsList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
                  <td>{contact.wonEmmy ? <p>🌟</p> : <p></p>}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger fs-6"
                      onClick={() => deleteContact(contact.id)}
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
    </div>
  );
}

export default App;
