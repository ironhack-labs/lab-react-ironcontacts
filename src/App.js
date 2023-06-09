import "./App.css";
import contactsFromDB from "./contacts.json";
import { useState } from "react";
const copy = [...contactsFromDB];
const displayedContacts = copy.splice(0, 5);
const remainingContacts = copy;
function App() {
  const [contact, setContact] = useState(displayedContacts);
  function AddContact() {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1)[0];
    if (remainingContacts.length > 0) {
      setContact([...contact, randomContact]);
    }
  }

  function SortByName() {
    setContact([...contact].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function SortByPopularity() {
    setContact(
      [...contact].sort(
        (b, a) => Math.floor(a.popularity) - Math.floor(b.popularity)
      )
    );
  }

  const DeleteContact = (idOfTheContactToDelete) => {

    const newListOfContacts = contact.filter( (contact) => {
      return contact.id !== idOfTheContactToDelete;
    });

    setContact(newListOfContacts);
  }

  return (
    <div className="App">
    <h1>IronContacts</h1>
        <button
        onClick={() => {
          AddContact();
        }}
      >
        Add Random Contact
      </button>
      <button
        onClick={() => {
          SortByName();
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => {
          SortByPopularity();
        }}
      >
        Sort by Popularity
      </button>
      <table>
        <td><h2>Picture</h2></td>
        <td><h2>Name</h2></td>
        <td><h2>Popularity</h2></td>
        <td><h2>Won an Oscar</h2></td>
        <td><h2>Won an Emmy</h2></td>
        <td><h2>Actions</h2></td>
        <tbody>
          {contact.map((contact) => {
            const wonOscar = contact.wonOscar ? true : false;
            const wonEmmy = contact.wonEmmy ? true : false;
            return (
              <tr key={contact.name}>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td><h3>{contact.name}</h3></td>
                <td><h3>{contact.popularity}</h3></td>
                <td><h3>{wonOscar ? '🏆' : ''}</h3></td>
                <td><h3>{wonEmmy ? '🌟':  ''}</h3></td>
                <td>
                <button className='delete' onClick={() => {DeleteContact(contact.id)}}>Delete this contact</button>
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
