import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";

function App() {
  let errorMessage = "";
  const initialContacts = contactsArray.slice(0, 5);

  const [contacts, setContacts] = useState(initialContacts);

  const addRandomContact = () => {
    const contactsFiltered = contactsArray.filter(
      (contact) => !contacts.some((e) => e.id === contact.id)
    );

    if (contactsFiltered.length > 0) {
      const randomIndex = Math.floor(Math.random() * contactsFiltered.length);

      setContacts((prevArrayContacts) => {
        const newArray = [contactsFiltered[randomIndex], ...prevArrayContacts];
        return newArray;
      });
    } else {
      errorMessage = "THERE ARE NO MORE CONTACTS";
      setContacts((prevArrayContacts) => [...prevArrayContacts]);
    }
  };

  const sortByPopularity = () => {
    setContacts((prevArrayContacts) =>
      [...prevArrayContacts].sort((a, b) => b.popularity - a.popularity)
    );
  };
  const sortByName = () => {
    setContacts((prevArrayContacts) =>
      [...prevArrayContacts].sort((a, b) => a.name.localeCompare(b.name))
    );
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
          {contact.pictureUrl ? (
            <img src={contact.pictureUrl} alt={contact.name}></img>
          ) : (
            <h4>IMAGE NOT AVAILABLE</h4>
          )}
        </td>
        <td>{contact.name}</td>
        <td>{Math.round(contact.popularity)}</td>
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
      <h2>{errorMessage}</h2>
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
