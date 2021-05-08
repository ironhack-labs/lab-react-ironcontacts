import React from "react";
import "./App.css";
import contacts from "./contacts.json";

const firstFiveContacts = contacts.slice(0, 5);

function App() {
  const [updatedContacts, setUpdatedContacts] = React.useState(
    firstFiveContacts
  );

  function addNew() {
    const randomNumber = () =>
      Math.floor(Math.random() * (contacts.length + 1));
    const randomContact = (num) =>
      updatedContacts.includes(contacts[num])
        ? randomContact(randomNumber())
        : contacts[num];
    const newArr = [...updatedContacts, randomContact(randomNumber())];
    setUpdatedContacts(newArr);
  }

  function alphabetSort() {
    const newArr = [...updatedContacts].sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    setUpdatedContacts(newArr);
  }

  function popSort() {
    const newArr = [...updatedContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setUpdatedContacts(newArr);
  }

  function deleteContact(event) {
    const newArr = [...updatedContacts].filter(function (contact) {
      return contact.id !== event.target.value;
    });
    setUpdatedContacts(newArr);
  }

  return (
    <div className="App">
      <p>Ironcontacts</p>
      <button onClick={addNew}>Add Random</button>
      <button onClick={alphabetSort}>Sort by Alphabet</button>
      <button onClick={popSort}>Sort by Popularity</button>
      <table>
        <tr>
          <th>PICTURE</th>
          <th>NAME</th>
          <th>POPULARITY</th>
          <th>ACTION</th>
        </tr>

        {updatedContacts.map((contact) => {
          const { pictureUrl, name, popularity, id } = contact;
          return (
            <tr>
              <td>
                <img src={pictureUrl} alt="image" style={{ height: "80px" }} />
              </td>
              <td>{name}</td>
              <td>{popularity.toFixed(2)}</td>
              <td>
                <button onClick={deleteContact} value={id}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
