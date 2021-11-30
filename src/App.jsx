import contactsData from "./contacts.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRndContract = () =>
    setContacts((contacts) => {
      const newContracts = contactsData.filter((c) => !contacts.includes(c));
      const rndContract =
        newContracts[Math.floor(Math.random() * newContracts.length)];
      return [...contacts, rndContract];
    });

  const sortByPopularity = () =>
    setContacts((contacts) =>
      contacts.slice().sort((a, b) => b.popularity - a.popularity)
    );

  const sortByName = () =>
    setContacts((contacts) =>
      contacts.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
    );

  const deleteContact = (id) =>
    setContacts((contacts) => contacts.filter((c) => c.id !== id));

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div>
        <button onClick={addRndContract}>Add Random Contact</button>
        <button onClick={sortByPopularity} style={{ margin: "0 10px" }}>
          Sort by popularity
        </button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
            {contacts.map((c) => {
              return (
                <tr key={c.id}>
                  <td>
                    <img style={{ height: "10vh" }} src={c.pictureUrl} alt="" />
                  </td>
                  <td>{c.name}</td>
                  <td>{c.popularity.toFixed(2)}</td>
                  <td>{c.wonOscar && "🏆"}</td>
                  <td>{c.wonEmmy && "⭐"}</td>
                  <td>
                    <button onClick={() => deleteContact(c.id)}>Delete</button>
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
