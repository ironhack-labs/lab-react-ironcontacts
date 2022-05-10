import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);

  /** Iteration 3 | Add New Random Contacts **/
  const [contacts, setContact] = useState(fiveContacts);
  const remainingContact = contactsArr.slice(6, contactsArr.length);
  const randomContactIndex = Math.floor(
    Math.random() * remainingContact.length
  );
  const randomContact = remainingContact[randomContactIndex];
  const randomArr = fiveContacts.concat(randomContact);
  // console.log(randomArr);

  function addRandomContact() {
    setContact(randomArr);
  }

  /** Iteration 4 | Sort Contacts by Name and Popularity **/
  function sortByPopularity() {
    const orderByPopularity = randomArr.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContact(orderByPopularity);
  }

  function sortByName() {
    const orderByName = randomArr.sort((a, b) => a.name.localeCompare(b.name));
    setContact(orderByName);
  }

  function removeContact(idToRemove) {
    const arrAfterDelete = randomArr.filter(
      (element) => element.id !== idToRemove
    );
    // console.log(arrAfterDelete);
    setContact(arrAfterDelete);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add A Random Contact</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar ? <td>🏆</td> : <td></td>}
              {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              <td>
                <button onClick={() => removeContact(contact.id)}>
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
