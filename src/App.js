import logo from "./logo.svg";
import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

// console.log(contactsArr);
// console.log(contactsArr.slice(0, 5));
// console.log(contactsArr[47]);

function App() {
  const [contacts, setContacts] = useState(contactsArr.slice(0, 6));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={() => {
          setContacts([...contacts, pickRandomContact(contacts)]);
        }}
      >
        Add random contact
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    style={{ height: "200px" }}
                    src={contact.pictureUrl}
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function pickRandomContact(arr) {
  // console.log("Button clicked");
  const randomNum = Math.floor(
    Math.random() * (contactsArr.length - arr.length - 1) + arr.length - 1
  );
  // console.log("Random Number: ", randomNum);
  return contactsArr[randomNum];
  // console.log("Random Contact: ", randomContact);
}

export default App;
