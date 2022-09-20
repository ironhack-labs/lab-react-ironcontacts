import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function getRandomContact(contactsList) {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  if (contactsList.includes(randomContact)) {
    return getRandomContact(contactsList);
  }
  return randomContact;
}

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  return (
    <div className='App'>
      <button
        onClick={() => {
          setContactsList(
            contactsList.slice().sort((a, b) => a.name.localeCompare(b.name))
          );
        }}>
        Sort by Name
      </button>

      <button
        onClick={() => {
          setContactsList(
            contactsList.slice().sort((a, b) => b.popularity - a.popularity)
          );
        }}>
        Sort by Popularity
      </button>

      <button
        onClick={() => {
          setContactsList([...contactsList, getRandomContact(contactsList)]);
        }}>
        Add Contact
      </button>

      <table border={1}>
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
          {contactsList.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: "5rem" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button
                    onClick={() => {
                      setContactsList(
                        contactsList.filter((c) => c !== contact)
                      );
                    }}>
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
