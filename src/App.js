import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 6));

  function addRandomContact() {
    const contactsOn = contactsArr.map((contact) => contact.id);
    // console.log("Contact on the screen: " + contactsOn);

    const contactsOut = contacts.filter(
      (contact) => !contactsOn.includes(contact.id)
    );
    // console.log("Contact not on the screen: ", contactsOut);

    const randomIndex = Math.floor(Math.random() * contactsOut.length);
    const randomContact = contactsOut[randomIndex];

    setContactsArr([...contactsArr, randomContact]);
  }

  function sortByName() {
    const copy = [...contactsArr];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContactsArr(copy);
  }

  function sortByPopularity() {
    const copy = [...contactsArr];
    copy.sort((a, b) => b.popularity - a.popularity);
    setContactsArr(copy);
  }

  function deleteContact(id) {
    const contactsAfterDelete = contactsArr.filter((contact) => {
      return contact.id !== id;
    });

    setContactsArr(contactsAfterDelete);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttons-top">
        <button onClick={addRandomContact}>Add random contact 💥</button>
        <button onClick={sortByPopularity}>Sort by popularity ✨</button>
        <button onClick={sortByName}>Sort by name 🔤</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr contact={contact} key={contact.id}>
                <td>
                  {" "}
                  <img
                    className="contact-foto"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />{" "}
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p></p>} </td>
                <td>{contact.wonwonEmmy ? <p>🏆</p> : <p></p>} </td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    Delete contact 🗑️
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
