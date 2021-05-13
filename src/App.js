import React from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));

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
              <PresentCelebrity
                {...contact}
                index={index}
                key={`${contact.id} – ${index}`}
                deleteContact={deleteContact}
              ></PresentCelebrity>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PresentCelebrity(props) {
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
        <button onClick={() => props.deleteContact(props.index)}>Delete</button>
      </td>
    </tr>
  );
}

export default App;
