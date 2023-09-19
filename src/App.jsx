import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));
  const [rest, setRest] = useState(contacts.slice(5));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * rest.length);
    const randomElement = rest[randomIndex];
    setContact((prevContacts) => {
      return [...prevContacts, randomElement];
    });
    if (rest.length)
      setRest((prevState) =>
        prevState.filter((e) => e.id !== randomElement.id)
      );
  };

  function compareNumbers(a, b) {
    return b.popularity - a.popularity;
  }

  const sortByPopular = () => {
    setContact((contactList) => {
      return [...contactList.sort(compareNumbers)];
    });
  };

  const sortByName = () => {
    setContact((contactNames) => {
      return [...contactNames.sort()];
    });
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contact.filter((contact) => {
      return contact.id !== contactId;
    });
    setContact(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopular}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
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
          {contact.map((contacts) => {
            return (
              <tr key={contacts.id}>
                <td>
                  <img src={contacts.pictureUrl}></img>
                </td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                {contacts.wonOscar ? <td>🏆</td> : <td></td>}
                {contacts.wonEmmy ? <td>🌟</td> : <td></td>}
                <td>
                  <button onClick={() => deleteContact(contacts.id)}>
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
