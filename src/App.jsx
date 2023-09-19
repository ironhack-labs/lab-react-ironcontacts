import "./App.css";
import React, {useState} from "react";

import contactsData from "./contacts.json";

function App() {

const [contacts, setContacts] = useState(contacts.slice(0, 5));

const remainingContacts = contactsData.slice(5);

  const getRandomContact = () => {
    if (remainingContacts.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);

    const randomContact = remainingContacts[randomIndex];

    const newDisplayedContacts = [...displayedContacts, randomContact];

    setDisplayedContacts(newDisplayedContacts);
  };

  const sortContactsByName = () => {
    const sortedContacts = [...displayedContacts];
    if (sortByName) {
      sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sortedContacts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setDisplayedContacts(sortedContacts);
    setSortByName(!sortByName);
    setSortByPopularity(false); 
  };

  const sortContactsByPopularity = () => {
    const sortedContacts = [...displayedContacts];
    if (sortByPopularity) {
      sortedContacts.sort((a, b) => a.popularity - b.popularity);
    } else {
      sortedContacts.sort((a, b) => b.popularity - a.popularity);
    }
    setDisplayedContacts(sortedContacts);
    setSortByPopularity(!sortByPopularity);
    setSortByName(false);
  };

  const deleteContact = (id) => {

    const updatedContacts = displayedContacts.filter((contact) => contact.id !== id);

    setDisplayedContacts(updatedContacts);
  };


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={getRandomContact}>Add Random Contact</button>

      <button onClick={sortContactsByName}>
        {sortByName ? "Sort by Name (A-Z)" : "Sort by Name (Z-A)"}
      </button>
      <button onClick={sortContactsByPopularity}>
        {sortByPopularity ? "Sort by Popularity (Low to High)" : "Sort by Popularity (High to Low)"}
      </button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="100"
                  height="150"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar}</td>
              <td>{contact.wonEmmy}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
