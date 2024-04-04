import "./App.css";
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const [selectedContact, setSelectedContact] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    setSelectedContact((prevSelectedContact) => [...prevSelectedContact, contacts[randomIndex]]);
  };

  const sortPopularity = () => {
    setSelectedContact((prevSelectedContact) => [...prevSelectedContact].sort((a, b) => b.popularity - a.popularity));
  }

  const sortName = () => {
    setSelectedContact((prevSelectedContact) => [...prevSelectedContact].sort((a, b) => a.name.localeCompare(b.name)));
  }

  const deleteContact = () => {
    setSelectedContact((prevSelectedContact) => prevSelectedContact.slice(0, -1));
  }

  return (
    <div className="App">
      <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      </div>
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
          {selectedContact.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.pictureUrl}</td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "⭐" : ""}</td>
              <td ><button onClick={deleteContact}> Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default App;
