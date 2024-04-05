import "./App.css";
import DataContacts from "./contacts.json";

import { useState } from "react";

const init = DataContacts.splice(0, 5);

function App() {
  const [contacts, setContacts] = useState(init);

  const addContact = () => {
    setContacts([
      ...contacts,
      DataContacts.splice(
        Math.round(Math.random() * DataContacts.length),
        1
      )[0],
    ]);
  };
  const sortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const sortByPop = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };
  const deleteElem = (id) => {
    return () => setContacts(contacts.filter((elem) => elem.id != id));
  };

  return (
    <>
      <div className="App">
        <h1 className="mb-4">LAB | React IronContacts</h1>
      </div>
      <div className="mb-4">
        <button className="btn btn-primary m-2" onClick={addContact}>
          <i class="bi bi-plus-circle-fill"></i> Add Contact
        </button>
        <button className="btn btn-info m-2" onClick={sortByName}>
          <i class="bi bi-filter-circle-fill"></i> Sort by Name
        </button>
        <button className="btn btn-popular m-2" onClick={sortByPop}>
          <i class="bi bi-emoji-heart-eyes-fill"></i> Sort by Popularity
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Picture</th>
            <th className="col">Name</th>
            <th className="col">Popularity</th>
            <th className="col">Won Oscar</th>
            <th className="col">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((elem) => (
            <tr key={elem.id}>
              <td>
                <img src={elem.pictureUrl} alt={elem.name} />
              </td>
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
              <td>{elem.wonOscar ? "🏆" : ""}</td>
              <td>{elem.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={deleteElem(elem.id)}
                >
                  <i class="bi bi-exclamation-circle-fill"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
