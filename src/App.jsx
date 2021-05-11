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
            function deleteThisContact() {
              deleteContact(index);
            }
            return (
              <Contact
                {...person}
                index={index}
                key={`${person.id} - ${index}`}
                deleteContact={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Contact(props) {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt={props.name}></img>
      </td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
      <td>
        <button onClick={() => props.deleteContact(props.index)}>Delete</button>
      </td>
    </tr>
  );
}

export default App;
