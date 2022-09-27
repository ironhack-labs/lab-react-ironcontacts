import logo from "./logo.svg";
import "./App.css";

import allContacts from "./contacts.json";

import { useState } from "react";

const contacts = allContacts.slice(0, 5);

function App() {
  const [myContacts, setMyContacts] = useState(contacts);

  const pickRandomContact = (allContacts) => {
    let remainingContacts = allContacts;
    myContacts.forEach((contact) => {
      remainingContacts = remainingContacts.filter((e) => {
        return contact.name !== e.name;
      });
    });
    let random = Math.floor(Math.random() * remainingContacts.length + 1);
    let randomContact = remainingContacts[random];
    let newArray = [...myContacts, randomContact];
    setMyContacts(newArray);
  };

  const sortByPopularity = (arr) => {
    let sortedArray = [...arr].sort((a, b) => b.popularity - a.popularity);
    setMyContacts(sortedArray);
  };

  const sortByName = (arr) => {
    let sortedArray = [...arr].sort((a, b) => a.name.localeCompare(b.name));
    setMyContacts(sortedArray);
  };

  const deleteContact = (name) => {
    const filteredArray = myContacts.filter((element) => {
      return element.name !== name;
    });
    setMyContacts(filteredArray);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={() => {
          pickRandomContact(allContacts);
        }}
      >
        Add Random Contact
      </button>
      <button onClick={() => sortByPopularity(myContacts)}>
        Sort by popularity
      </button>
      <button onClick={() => sortByName(myContacts)}>Sort by name</button>
      <table className="contact-table">
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
        {myContacts.map((element) => (
          <tbody>
            <tr>
              <td className="contact-image-cell">
                <img className="contact-image" src={element.pictureUrl}></img>
              </td>
              <td>
                <p>{element.name}</p>
              </td>
              <td>
                <p>{element.popularity.toFixed(2)}</p>
              </td>
              <td>
                <p>{element.wonOscar ? <p>🏆</p> : ""}</p>
              </td>
              <td>
                <p>{element.wonEmmy ? <p>🏆</p> : ""}</p>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteContact(element.name);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;

// const [myMoviesArray, setMyMoviesArray] = useState(moviesDataArray);
