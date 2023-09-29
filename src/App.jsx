import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import contacts from "./contacts.json";

function App() {
  const [displayContacts, setDisplayContacts] = useState(contacts.slice(0, 5));

  function addRandomContact() {
    if (contacts.length > displayContacts.length) {
      const remainingContacts = contacts.filter(
        (contact) =>
          !displayContacts.find(
            (displayedContact) => displayedContact.id === contact.id
          )
      );

      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setDisplayContacts([...displayContacts, randomContact]);
    }
  }

  const sortName = () => {
    const contacts = [...displayContacts];
    const data = contacts.sort((a, b) => a.name.localeCompare(b.name));
    setDisplayContacts(data);
  };

  const sortPopularity = () => {
    const contacts = [...displayContacts];
    const data = contacts.sort((a, b) => b.popularity - a.popularity);
    setDisplayContacts(data);
  };

  function removeContact(id) {
    const updatedContacts = displayContacts.filter(
      (contact) => contact.id !== id
    );
    setDisplayContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button
        onClick={addRandomContact}
        className={
          displayContacts.length === contacts.length
            ? "btn btn-outline-primary disabled"
            : "btn btn-primary"
        }
      >
        Add Random Contact
      </button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
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
          {displayContacts.map(
            (contact) =>
              contact && (
                <Contact
                  key={contact.id}
                  contact={contact}
                  removeContact={removeContact}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
