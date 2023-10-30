import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [displayedContacts, setDisplayedContacts] = useState(5);

  const handleRandomContact = () => {
    const remainingContacts = contacts.slice(displayedContacts);
    const randomContacts = [];

    for (let i = 0; i < 3 && i < remainingContacts.length; i++) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      randomContacts.push(remainingContacts[randomIndex]);
      remainingContacts.splice(randomIndex, 1);
    }

    setContacts([...randomContacts, ...contacts]);
    setDisplayedContacts(displayedContacts + 3);
  };

  const handleSortName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const handleSortPopularity = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  const handleDelete = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="btns">
        <button onClick={handleRandomContact}>Add Random Contact</button>
        <button onClick={handleSortName}>Sort By Popularity</button>
        <button onClick={handleSortPopularity}>Sort By Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(0, displayedContacts).map((person) => (
            <tr className="actorsContainer" key={person.id}>
              <td>
                <img src={person.pictureUrl} alt={person.name}></img>
              </td>
              <td>{person.name}</td>
              <td>{person.popularity.toFixed(2)}</td>
              <td>{person.wonOscar ? "🏆" : "-"}</td>
              <td>{person.wonEmmy ? "🌟" : "-"}</td>
              <td><button onClick={() => handleDelete(person.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
