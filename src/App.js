import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  //iteration 1

  const fiveContact = contacts.slice(0, 6);
  const [actors, setActors] = useState(fiveContact);
  // console.log(actors);

  // iteration 3

  function newRandomContacts() {
    return contacts[Math.floor(Math.random() * actors.length)];
  }

  const addActor = (contactId) => {
    const filteredActors = actors.filter((contact) => {
      return contact.id === contactId;
    });

    setActors(filteredActors);
  };

  function addContacts() {
    setActors([...actors, { ...newRandomContacts() }, { addActor }]);
  }

  // iteration 4

  function sortByPopularity() {
    const popSorting = actors.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    setActors([...popSorting]);
  }

  function sortByName() {
    const nameSorting = actors.sort((a, b) => (b.name < a.name ? 1 : -1));
    setActors([...nameSorting]);
  }

  // iteration 5

  const deleteActor = (contactId) => {
    const filteredActors = actors.filter((contact) => {
      return contact.id !== contactId;
    });

    setActors(filteredActors);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContacts}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        {actors.map((contact, index) => {
          return (
            <tr>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="contactPic"
                  height={200}
                  width={200}
                />
              </td>
              <p key={contact.id}></p>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>

              {/* iteration 2 */}
              <td>
                {contact.wonOscar} {contact.wonOscar ? "🏆" : ""}
              </td>
              <td>
                {contact.wonEmmy} {contact.wonEmmy ? "🏆" : ""}
              </td>
              <td>
                <button
                  onClick={() => deleteActor(contact.id)}
                  className="btn-delete"
                >
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
