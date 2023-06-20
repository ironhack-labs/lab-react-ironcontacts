// src/App.js
import contactData from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  let firstFiveContacts = contactData.slice(0, 5);
  let remainingContacts = contactData.slice(5, contactData.length);

  const [contacts, setContacts] = useState(firstFiveContacts);
  const [contactsRemaining, setContactsRemaining] = useState(remainingContacts);

  const addRandomContact = () => {
    //get random index
    const randomIndex = [Math.floor(Math.random() * contactsRemaining.length)];

    //get a random contact
    const randomContact = contactsRemaining[randomIndex];

    //make copy of remaining contacts array
    let newcontactsRemainingArr = [...contactsRemaining];

    //remove random contact from remaining contacts array
    newcontactsRemainingArr.splice(randomIndex, 1);

    //make copy of contacts to display array and add new random contact
    let newContactArr = [randomContact, ...contacts];

    //set new values to update state
    setContactsRemaining(newcontactsRemainingArr);
    setContacts(newContactArr);
  };

  const sortByName = () => {
    let contactsArrToSort = [...contacts];
    contactsArrToSort.sort((a, b) => a.name.localeCompare(b.name));

    setContacts(contactsArrToSort);
  };

  const sortByPopularity = () => {
    let contactsArrToSort = [...contacts];
    contactsArrToSort.sort((a, b) => b.popularity - a.popularity);

    setContacts(contactsArrToSort);
  };

  const deleteContact = (contactId) => {
    const contactArrUpdated = contacts.filter((elm) => elm.id !== contactId);

    setContacts(contactArrUpdated);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="h1box">
          <h1>IronContacts</h1>
        </div>
        <div className="buttonbox">
          {/* conditional rendering so it doesn't give an error if we try to add random contact from an empty array */}
          {contactsRemaining.length !== 0 && (
            <button className="button" onClick={addRandomContact}>
              Add Random Contact
            </button>
          )}
          <button className="button" onClick={sortByPopularity}>
            Sort by popularity
          </button>
          <button className="button" onClick={sortByName}>
            Sort by name
          </button>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>
                  <img src={elm.pictureUrl} alt={elm.name} />
                </td>
                <td>{elm.name}</td>
                <td>{elm.popularity.toFixed(2)}</td>
                {elm.wonOscar ? <td>🏆</td> : <td></td>}
                {elm.wonEmmy ? <td>🏆</td> : <td></td>}
                <td>
                  <button
                    className="button"
                    onClick={() => {
                      deleteContact(elm.id);
                    }}
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
