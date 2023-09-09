import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const contactsList = contactsData.slice(0, 5);

  const [contacts, setContacts] = useState(contactsList);
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));


  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more contacts to ad`d!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContacts((prevState) => [...prevState, randomContact]);
    setRemainingContacts((prevState) => prevState.filter(contact => contact.id !== randomContact.id))
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <button className="mr-4" onClick={addRandomContact}>Add Random Contact</button>
        <button className="mr-4" onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>
                Won <br /> Oscar
              </th>
              <th>
                Won <br /> Emmy
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    height="100"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <span>🏆</span> : null}</td>
                <td>{contact.wonEmmy ? <span> 🌟</span> : null}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
