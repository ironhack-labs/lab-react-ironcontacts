import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);
      setFirstFive([...firstFive, randomContact]);
      setRemainingContacts(updatedRemainingContacts);
    }
  }

  const sortByPopularity = () => {
        const sortedContacts = [...firstFive];
        sortedContacts.sort((a, b) => b.popularity - a.popularity);
        setFirstFive(sortedContacts);
      };
    
      const sortByName = () => {
        const sortedContacts = [...firstFive];
        sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
        setFirstFive(sortedContacts);
      };

      const removeContact = (id) => {
        const updatedContacts = firstFive.filter((contact) => contact.id !== id);
        setFirstFive(updatedContacts);
      };
      
    

  return (
    <div className="App">

      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

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
          {firstFive.map((contact, index) => (
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name} width="120" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
              <button onClick={() => removeContact(contact.id)}>Delete</button>
              </td>
              

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default App;
