import { TimeDynamicImagery } from "cesium";
import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5, contactsJSON.length)
  );

  function addRandomContact() {
    const updateRemaining = [...remainingContacts];

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNum, 1)[0];
    //update contatcs
    const updatedContacts = [...contacts, randomContact];
    setContacts(updatedContacts);
    setRemainingContacts(updateRemaining);
  }

  function sortName() {
    const toSortName = [...contacts];
    const sortedNames = toSortName.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedNames);
  }

  function sortByPopularity() {
    const sortPopularity = [...contacts];
    const sortedByPopularity = sortPopularity.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  }

  function deleteContact(i) {
    const deletedContact = [...contacts];
    deletedContact.splice(i, 1);

    setContacts(deletedContact);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addRandomContact()}>Add random!</button>
      <button onClick={() => sortName()}>Sort by name</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((eachContact, i) => {
            return (
              <tr key={i} className="table-row">
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    className="contact-picture"
                  />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                {eachContact.wonOscar ? <td>Won oscar!</td> : <td></td>}
                {eachContact.wonEmmy ? <td>WOn an emmy!</td> : <td></td>}
                <td>
                  <button
                    className="delete-button"
                    onClick={() => deleteContact(i)}
                  >
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