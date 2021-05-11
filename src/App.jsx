import React from "react";
import contacts from "./contacts.json";
import "./App.css";

const firstFive = contacts.slice(0, 5);

function App() {
  const [contactsArr, setContactsArr] = React.useState(firstFive);

  function addRandomContact() {
    const randomContact = contacts.slice(5)[
      Math.floor(Math.random() * (contacts.length - 5))
    ];
    // if (contactsArr.includes(randomContact)) {
    //   addRandomContact();
    // }
    const newArr = [...contactsArr, randomContact];
    console.log(newArr);
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

  function deleteContact(event) {
    const newArr = [...contactsArr].filter(
      (el) => el.id !== event.target.value
    );
    setContactsArr(newArr);
    console.log(newArr);
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
              <tr>
                <td>
                  <img src={person.pictureUrl}></img>
                </td>
                <td>{person.name}</td>
                <td>{person.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={deleteContact} value={person.id}>
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
