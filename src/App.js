import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const fiveContacts = contacts.slice(0, 5);

function App() {
  const [contact, setContact] = useState(fiveContacts);

  const newContacts = contacts.slice(6);

  const randomContact = () => {
    const newContact = contacts[Math.floor(Math.random() * newContacts.length)];
    setContact([newContact, ...contact]);
  };

  const sortButton = () => {
    let sorted = [...contact.sort((x, y) => x.name.localeCompare(y.name))];
    setContact(sorted);
  };

  const sortPopul = () => {
    let sortPopularity = [
      ...contact.sort((x, y) => y.popularity - x.popularity),
    ];
    setContact(sortPopularity);
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    const filterContacts = [...contact].filter((oneContact) => {
      return oneContact.id !== contactId;
    });

    setContact(filterContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortButton}>Sort by name</button>
      <button onClick={sortPopul}>Sort by popularity</button>
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
          {contact.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt=""></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p>🤌🏽</p>}</td>
                <td>{contact.wonEmmy ? <p>🌟</p> : <p>🤌🏽</p>}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
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
