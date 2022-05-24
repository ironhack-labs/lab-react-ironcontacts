import "./App.css";
import { useState } from "react";
import contacts from "../src/contacts.json";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));

  const randomContact = () => {
    let random = contacts[Math.floor(Math.random() * contacts.length)];

    setContact([random, ...contact]);
  };

  const sortName = () => {
    let sortedName = [
      ...contact.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    ];
    setContact(sortedName);
  };

  const sortPopularity = () => {
    let sortedPop = [
      ...contact.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      }),
    ];
    setContact(sortedPop);
  };

  const deleteContact = (contactId) => {
    let filteredContact = contact.filter((element) => {
      return element.id !== contactId;
    });
    setContact(filteredContact);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={() => sortName()}>Sort by Name</button>
      <button onClick={() => sortPopularity()}>Sort by Popularity</button>
      <button onClick={() => randomContact()}>Add Random Contact</button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
          <th>Actions</th>
        </tr>
        {contact.map((element) => {
          return (
            <tr className="table-row">
              <td>
                <img
                  className="contact-img"
                  src={element.pictureUrl}
                  alt="celebrity_photo"
                />
              </td>
              <td>{element.name}</td>
              <td>{element.popularity.toFixed(2)}</td>
              <td>{element.wonOscar ? <p>🏆</p> : <p> </p>}</td>
              <td>{element.wonEmmy ? <p>🏆</p> : <p> </p>}</td>
              <td>
                <button onClick={() => deleteContact(element.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
