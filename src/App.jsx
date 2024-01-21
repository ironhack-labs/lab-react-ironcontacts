import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );
  let contactsCopy = [...contacts];

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContacts((prevContacts) => [...prevContacts, randomContact]);

      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);

      setRemainingContacts(updatedRemainingContacts);
    }
  };

  function sortByPopularity() {
    contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(contactsCopy);
  }

  function sortedContactsByName() {
    contactsCopy.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(contactsCopy);
  }
  function deleteContact(contactId) {
    const filterContact = contacts.filter((filteredContacts) => {
      return filteredContacts.id !== contactId;
    });
    setContacts(filterContact);
  }
  return (
    <div>
      <h1>IronContacts</h1>
      <div className="grid text-center c-grid gap-3" role="toolbar">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={addRandomContact}
        >
          Add Random Contact
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={sortByPopularity}
        >
          Sort by popularity
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={sortedContactsByName}
        >
          Sort by Name
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won an Oscar</th>
            <th scope="col">Won an Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  className="rounded-circle"
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{contact.name} </td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
