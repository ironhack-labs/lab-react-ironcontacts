import { useState } from "react";
import "./App.css";
import contactsArr from "./contacts.json";

function App() {
  let fiveContacts = contactsArr.slice(0, 5);

  /** Iteration 3 | Add New Random Contacts **/
  const [contacts, setContacts] = useState(fiveContacts);
  // const remainingContact = contactsArr.slice(6, contactsArr.length);
  // const randomContactIndex = Math.floor(
  //   Math.random() * remainingContact.length
  // );
  // const randomContact = remainingContact[randomContactIndex];
  // // const randomArr = fiveContacts.concat(randomContact);
  // const randomArr = [...contacts].concat(randomContact);

  function addRandomContact() {
    setContacts((prevContacts) => {
      const newContactsList = contactsArr.filter((contact) => {
        return !prevContacts.includes(contact);
      });
      const getRandomContact =
        newContactsList[Math.floor(Math.random() * newContactsList.length)];
      const newConctactSelection = [...prevContacts, getRandomContact];
      return newConctactSelection;
    });
  }

  /** Iteration 4 | Sort Contacts by Name and Popularity **/
  function sortByPopularity() {
    setContacts((prevContacts) => {
      let sortedByPopularity = [...prevContacts].sort(
        (a, b) => b.popularity - a.popularity
      );
      return sortedByPopularity;
    });
  }

  function sortByName() {
    setContacts((prevContacts) => {
      let sortByName = [...prevContacts].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return sortByName;
    });
  }

  function removeContact(idToRemove) {
    setContacts((prevContacts) => {
      let arrAfterDelete = [...prevContacts].filter(
        (element) => element.id !== idToRemove
      );
      return arrAfterDelete;
    });
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
