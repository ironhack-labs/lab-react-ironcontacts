import "./App.css";
import { useState } from "react";
import contactsArr from "./contacts.json";

function App() {
  const [contactsToDisplay, setContactsToDisplay] = useState(
    contactsArr.slice(0, 5)
  );

  const addContact = () => {
    const randomContact = Math.floor(
      Math.random() * contactsArr.slice(5).length
    );
    const newContact = contactsArr[randomContact];

    const copyContacts = [...contactsToDisplay];

    copyContacts.unshift(newContact);

    setContactsToDisplay(copyContacts);
  };

  const sortByPopularity = () => {
    const copyContacts = [...contactsToDisplay];

    copyContacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setContactsToDisplay(copyContacts);
  };
  const sortByName = () => {
    const copyContacts = [...contactsToDisplay];

    copyContacts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    setContactsToDisplay(copyContacts);
  };
  const deleteContact = (contactId) => {
    const copyContacts = contactsToDisplay.filter((contact) => {
      return contactId !== contact.id;
    });
    setContactsToDisplay(copyContacts);
  };
  console.log(contactsArr);
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => addContact()}>Random Contact</button>
      <button onClick={() => sortByPopularity()}>By Popularity</button>
      <button onClick={() => sortByName()}>By Name</button>
      <h1>Contacts List</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsToDisplay.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <p>🏆</p>}</td>
              <td>{contact.wonEmmy && <p>🗽</p>}</td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
