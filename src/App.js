import "./App.css";
import "./index.css";
import { useState } from "react";
const newContacts = require("./contacts.json");

function App() {
  const [contacts, setContacts] = useState(newContacts.slice(0, 5));

  const sortByName = () => {
    const sortedContacts = contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts([...sortedContacts]);
  };

  const sortByPopularity = () => {
    const sortedPop = contacts.sort((a, b) => b.popularity - a.popularity);
    setContacts([...sortedPop]);
  };

  const deleteContact = (id) => {
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="btns-top-div">
        <button
          className="top-btn"
          onClick={() =>
            setContacts([
              ...contacts,
              newContacts[Math.floor(Math.random() * newContacts.length) + 5],
            ])
          }
        >
          Add random contact
        </button>

        <button className="top-btn" onClick={() => sortByPopularity()}>
          Sort by popularity
        </button>

        <button className="top-btn" onClick={() => sortByName()}>
          Sort by name
        </button>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="table-head">
                <h2>Image</h2>
              </th>
              <th className="table-head">
                <h2>Name</h2>
              </th>
              <th className="table-head">
                <h2>Popularity</h2>
              </th>
              <th className="table-head">
                <h2>
                  Won an <br /> Oscar
                </h2>
              </th>
              <th className="table-head">
                <h2>
                  Won an <br /> Emmy
                </h2>
              </th>
              <th className="table-head">
                <h2>Actions</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      className="prf-img"
                      src={contact.pictureUrl}
                      alt="contact-img"
                    />
                  </td>
                  <td>
                    <h3>{contact.name}</h3>
                  </td>
                  <td>
                    <h3>{contact.popularity}%</h3>
                  </td>
                  <td className="winner">{contact.wonOscar ? "🏆" : ""}</td>
                  <td className="winner">{contact.wonEmmy ? "🏆" : ""}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
