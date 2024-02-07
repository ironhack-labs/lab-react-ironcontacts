import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = contactsData.slice(0, 5);
  console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);
  

  const addContact = () => {
    const otherContacts = contactsData.slice(5);
    const randomContactIndex = Math.floor(
      Math.random() * otherContacts.length
    );
    const randomContact = otherContacts[randomContactIndex];
    setContacts((prev) => [randomContact, ...prev]);
  };

  const sortContactByPopularity = () => {
    const popularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(popularity);
  };

  const sortContactByName = () => {
    const name = [...contacts].sort(
      (a, b) => a.name.localeCompare(b.name)
    );
    setContacts(name);
  };

  const onDelete = (id) => {
    const newActorsArr = contacts.filter((actor) => {
        return actor.id !== id
    })

    setContacts(newActorsArr);

}

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortContactByPopularity}>Sort by popularity</button>
      <button onClick={sortContactByName}>Sort by name</button>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img src={actor.pictureUrl} />
                </td>
                <td>{actor.name}</td>
                <td>{Math.round(actor.popularity * 100) / 100}</td>
                {actor.wonOscar ? <td>🏆</td> : <td></td>}
                {actor.wonEmmy ? <td>🌟</td> : <td></td>}
                <td>
                {" "}
                <button
                  onClick={() => {
                    onDelete(actor.id);
                  }}
                > ❌
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
