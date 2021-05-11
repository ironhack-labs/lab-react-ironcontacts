import React from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));

  function addRandomContact() {
    const randomContact = contacts.slice(5)[
      Math.floor(Math.random() * (contacts.length - 5))
    ];
    const newArr = [...contactsArr, randomContact];
    setContactsArr(newArr);
  }

  function sortByName() {
    const newArr = [...contactsArr].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactsArr(newArr);
  }

  function sortByPopularity() {
    const newArr = [...contactsArr].sort((a, b) => b.popularity - a.popularity);
    setContactsArr(newArr);
  }

  function deleteContact(index) {
    const newArr = [...contactsArr].filter((person, idx) => idx !== index);
    setContactsArr(newArr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table className="contacts-container">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((person, index) => {
            return (
              <tr key={`${person.id} - ${index}`}>
                <td>
                  <img src={person.pictureUrl}></img>
                </td>
                <td>{person.name}</td>
                <td>{person.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={() => deleteContact(index)}>Delete</button>
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
