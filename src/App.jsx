import { useState } from "react";
import "./App.css";
import Contacts from "./contacts.json";

const newContacts = Contacts.slice(1, 6);
function App() {
  const [contacts, setContacts] = useState(newContacts);

  const handleAddContact = () => {
    const index = Math.floor(Math.random() * (Contacts.length - 5 + 1)) + 5;
    const randomContact = Contacts[index];
    setContacts([...contacts, randomContact]);
  };

  const handleSortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const handleSortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };

  const handleDelete = (contactId) => {
    const filteredList = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredList);
  };
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="btn-Container">
        <button onClick={() => handleAddContact()}>Add Contact</button>
        <button onClick={() => handleSortByName()}>Sort By Name</button>
        <button onClick={() => handleSortByPopularity()}>
          Sort By Popularity
        </button>
      </div>
      <table>
        <thead className="tableHead">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🌟</td> : <td></td>}
                <td>
                  <button onClick={() => handleDelete(contact.id)}>🗑️</button>
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
