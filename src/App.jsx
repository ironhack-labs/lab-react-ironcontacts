import "./App.css";
import contactsData from "../src/contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const restContacts = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * restContacts.length);
    setContacts((prevState) => [restContacts[randomIndex], ...prevState]);
  };

  const sortContact = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortPopularity = () => {
    const sortedPopularity = [...contacts].sort(
      (a, b) => a.popularity - b.popularity
    );
    setContacts(sortedPopularity);
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortContact}>Sort by name</button>
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
          {contacts.map((contact, id) => (
            <tr key={id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>

              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🌟</td> : <td></td>}
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
