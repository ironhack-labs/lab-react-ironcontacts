import { useEffect, useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  const [contactos, setContacto] = useState(fiveContacts);

  function wonPrice(prize) {
    if (prize) return "🏆";
  }

  const randomContact = contacts[Math.floor(contacts.length * Math.random())];

  const handleRandom = () => {
    if (![...contactos].includes(randomContact)) {
      setContacto([...contactos, randomContact]);
    }
  };

  console.log(contactos);
  const handlePopularity = () => {
    setContacto(
      [...contactos].sort((a, b) =>
        a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
      )
    );
  };

  const handleName = () => {
    setContacto(
      [...contactos].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    );
  };

  const handleDelete = (id) => {
    setContacto((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App d-flex flex-column align-items-center">
      <h1 className="fs-1">IronContacts</h1>
      <div className="d-flex">
        <button
          className="btn btn-outline-info fs-3 m-2"
          onClick={handleRandom}
        >
          Add Random Contact
        </button>
        <button
          className="btn btn-outline-dark fs-3 m-2"
          onClick={handlePopularity}
        >
          Sort By Popularity
        </button>
        <button className="btn btn-outline-dark fs-3 m-2" onClick={handleName}>
          Sort by Name
        </button>
      </div>
      <table className="table-primary">
        <thead>
          <tr className="fs-2 text-center">
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col" className="p-4">
              Won Oscar
            </th>
            <th scope="col">Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((el) => {
            return (
              <tr key={el.id} className="text-center">
                <th>
                  <img src={el.pictureUrl} alt="pic" />
                </th>
                <td className="fs-4">{el.name}</td>
                <td className="fs-4">{el.popularity.toFixed(2)}</td>
                <td className="fs-4">{wonPrice(el.wonOscar)}</td>
                <td className="fs-4">{wonPrice(el.wonEmmy)}</td>
                <td>
                  <button
                    className="btn btn-outline-danger fs-4 m-3"
                    onClick={(event) => handleDelete(el.id)}
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
  );
}

export default App;
