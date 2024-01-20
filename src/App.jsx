import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const imgStyle = {
  width: "20%",
};

const ContactList = ({ contacts, onDelete }) => {
  return (
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
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td>
              <img
                src={contact.pictureUrl}
                alt={contact.name}
                style={imgStyle}
              />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "🌟" : ""}</td>
            <td><button onClick={() => onDelete(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [displayedContacts, setDisplayedContacts] = useState(
    contacts.slice(0, 5)
  );

  const remainingContacts = contacts.filter(
    (contact) => !displayedContacts.includes(contact)
  );

  const getRandomContact = () => {
    if (remainingContacts.length === 0) {
      return;
    }

    const randomFunc = Math.floor(Math.random() * remainingContacts.length);

    const randomContact = remainingContacts[randomFunc];

    setDisplayedContacts(prevContacts => [...prevContacts, randomContact]);
  };

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedContacts(sortedContacts);
  }

  const sortByPopularity = () => {
    const sortedPopularity = [...displayedContacts].sort((a, b) => {
      return b.popularity - a.popularity
    });
    setDisplayedContacts(sortedPopularity);
  }

  const deleteContact = (id) => {
    const updatedList = displayedContacts.filter((contact) => contact.id !== id);
    setDisplayedContacts(updatedList);
  } 

  return (
    <div>
      <h1>Contact List</h1>
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <ContactList contacts={displayedContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App;
