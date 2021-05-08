import React from "react";
import logo from "./logo.svg";
import contacts from "./contacts.json";
import "./App.css";

let firstFive = contacts.slice(0, 5);

function App() {
  const [contactsArr, setContactsArr] = React.useState(firstFive);
  function addRandomContact() {
    const randomContact = contacts.slice(5)[
      Math.floor(Math.random() * (contacts.length - 5))
    ];
    const newArr = firstFive.push(randomContact);
    setContactsArr(newArr);
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contacts</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {firstFive.map((person, index) => {
          return (
            <tr>
              <td>
                <img src={person.pictureUrl}></img>
              </td>
              <td>{person.name}</td>
              <td>{person.popularity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
