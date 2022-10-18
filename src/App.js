import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {
  console.log("Render App component");
  const initialContacts = contactsArray.slice(0, 5);
  const remainingContacts = contactsArray.slice(5);

  const [contacts, setContacts] = useState(initialContacts);

  const addRandomContact = () => {
    const contactsFiltered = remainingContacts.filter(
      (contact) => !contacts.some((e) => e.id === contact.id)
    );

    const randomIndex = Math.round(Math.random() * contactsFiltered.length - 1);

    setContacts((prevArrayContacts) => {
      const newArray = [...prevArrayContacts, contactsFiltered[randomIndex]];
      return newArray;
    });
  };

  const sortByPopularity = () => {
    setContacts((prevArrayContacts) => {
      const arraySorted = prevArrayContacts.sort(
        (a, b) => b.popularity - a.popularity
      );
      return [...arraySorted];
    });
  };
  const sortByName = () => {
    setContacts((prevArrayContacts) => {
      const arraySorted = prevArrayContacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return [...arraySorted];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevArrayContacts) => {
      return prevArrayContacts.filter((contact) => contact.id !== id);
    });
  };

  const elements = contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt={contact.name}></img>
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>{contact.wonOscar && "🏆"}</td>
        <td>{contact.wonEmmy && "🏆"}</td>
        <td>
          <button
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table className="center">
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
            <th>
              <h2>WonOscar</h2>
            </th>
            <th>
              <h2>wonEmmy</h2>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    </div>
  );
}
export default App;
