import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const remainingContactsList = contacts.filter(
    (el) => !contactList.includes(el)
  );

  const addContact = () => {
    const newContact =
      remainingContactsList[Math.floor(Math.random() * contacts.length)];

    const newContactsList = [...contactList, newContact];
    console.log(newContactsList);
    setContactList(newContactsList);
  };

  const sortByPopularity = () => {
    const sortedContactsByPopularity = [...contactList].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContactList(sortedContactsByPopularity);
  };

  const sortByName = () => {
    const sortedContactsByName = [...contactList].sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    setContactList(sortedContactsByName);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contactList.filter((contact) => {
      return contact.id !== contactId;
    });
    setContactList(filteredContacts);
  };

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <button onClick={addContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>

        {contactList.map((contact) => {
          return (
            <table key={contact.id} {...contact}>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="photo" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar && (
                    <img src="./3d-fluency-trophy.png" alt="Oscar" />
                  )}
                </td>
                <td>
                  {contact.wonEmmy && (
                    <img src="./3d-fluency-trophy.png" alt="Emmy" />
                  )}
                </td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default App;
