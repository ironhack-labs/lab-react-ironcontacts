import React from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const newArr = contacts.slice(0, 5);
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));

  function presentCelebrity(props) {
    return (
      <tr>
        <td>
          <img
            src={props.pictureUrl}
            alt={props.name}
            style={{ height: "150px" }}
          ></img>
        </td>
        <td>{props.name}</td>
        <td>{props.popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => props.deleteContact(props.index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }

  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * contacts.length);

    setContactsArr([contacts[randomIndex], ...contactsArr]);
  }

  function deleteContact(index) {
    const newArr = [...contactsArr].filter((contact, idx) => idx !== index);
    setContactsArr(newArr);
  }

  return (
    <div className="App">
      <h1>Contacts</h1>
      <button style={{ marginBottom: "50px" }} onClick={addRandomContact}>
        Add Random Contact
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact, index) => {
            function deleteThisContact() {
              deleteContact(index);
            }
            return (
              <presentCelebrity
                {...contact}
                index={index}
                key={`${contact.id} – ${index}`}
                deleteContact={deleteContact}
              ></presentCelebrity>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
