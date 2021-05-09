import "./App.css";
import contacts from "./contacts.json";
import React from "react";

const fiveContacts = contacts.slice(0, 5);

function App() {
  const [contactsUpdated, setcontactsUpdated] = React.useState(fiveContacts);

  function AddContact() {
    const randomContact =
      contacts[Math.floor(Math.random() * contacts.length + 1)];
    if (contactsUpdated.includes(randomContact)) {
      return;
    }
    if (contactsUpdated.length === 0) {
      const newArr = [...contactsUpdated, randomContact];
      setcontactsUpdated(newArr);
    }
    const newArr = [...contactsUpdated, randomContact];
    setcontactsUpdated(newArr);
  }

  function sortContacts() {
    const sortedArr = [...contactsUpdated].sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    setcontactsUpdated(sortedArr);
  }

  function sortPopularity() {
    const sortedArr = [...contactsUpdated].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setcontactsUpdated(sortedArr);
  }

  function deleteContact(event) {
    const newArr = [...contactsUpdated].filter((contact) => {
      return contact.id !== event.target.value;
    });
    setcontactsUpdated(newArr);
  }

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={AddContact}>Add Random Contac</button>
        <button onClick={sortContacts}>Sort by name</button>
        <button onClick={sortPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <h1>Picture</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Popularity</h1>
            </th>
            <th>
              <h1>Action</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {contactsUpdated.map((el) => {
            return (
              <tr key={el.id}>
                <td>
                  <img id="image" src={el.pictureUrl} />
                </td>
                <td>{el.name}</td>
                <td>{el.popularity}</td>
                <td>
                  <button onClick={deleteContact} value={el.id}>
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
