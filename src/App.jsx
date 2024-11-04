import { useState } from "react";
import "./App.css";
import data from "./contacts.json";
import { ContactList } from "./components/ContactList";

function App() {
  const [remainingContacts, setRemainingContacts] = useState(data.slice(5));
  const [contacts, setContacts] = useState(data.slice(0, 5));
  const [sortBy, setSortBy] = useState(null);

  const addRandomContact = () => {
    if (remainingContacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newContact = remainingContacts[randomIndex];
    const updatedRemainingContacts = remainingContacts.filter((e, index) => index !== randomIndex);

    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      return sortBy ? sortContacts(updatedContacts, sortBy) : updatedContacts;
    });
    setRemainingContacts(updatedRemainingContacts);
  };

  const sortContacts = (contactsToSort, rule) => {
    setSortBy(rule);
    if (rule === "name") {
      return [...contactsToSort].sort((a, b) => a.name.localeCompare(b.name));
    } else if (rule === "pop") {
      return [...contactsToSort].sort((a, b) => b.popularity - a.popularity);
    }
    return contactsToSort;
  };

  const handleSort = (rule) => {
    setContacts((prevContacts) => sortContacts(prevContacts, rule));
    setSortBy(rule);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => handleSort("name")}>Sort by name</button>
      <button onClick={() => handleSort("pop")}>Sort by popularity</button>
      <ContactList contacts={contacts} setContacts={setContacts} />
      <button onClick={addRandomContact}>Add random contact</button>
    </div>
  );
}

export default App;
