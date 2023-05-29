import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const contactsArray = contacts.slice(0, 5);

  const [contactCelebrities, setContactCelebrities] = useState(contactsArray);
  const [leftoverContacts, setLeftoverContacts] = useState(contacts.slice(6));

  const addContact = () => {
    if (leftoverContacts.length === 0) {
      return;
    }
    const newContactIndex = Math.floor(Math.random() * leftoverContacts.length);
    const newContact = leftoverContacts[newContactIndex];
    leftoverContacts.splice(newContactIndex, 1);
    setLeftoverContacts(leftoverContacts);
    const contactCelebritiesCopy = [...contactCelebrities, newContact];
    setContactCelebrities(contactCelebritiesCopy);
  };

  const sortByName = () => {
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.sort((a, b) => a.name.localeCompare(b.name));
    setContactCelebrities(contactCelebritiesCopy);
  };

  const sortByPopularity = () => {
    const contactCelebritiesCopy = [...contactCelebrities];
    contactCelebritiesCopy.sort((a, b) => b.popularity - a.popularity);
    setContactCelebrities(contactCelebritiesCopy);
  };

  const deleteHandler = (idToDelete) => {
    setContactCelebrities(
      contactCelebrities.filter(({ id }) => id !== idToDelete)
    );
  };

  return (
    <div className="App">
      <h1 className="text-primary fw-bold text-uppercase">IronContacts</h1>
      <button
        className="btn btn-light border-dark mx-1 fs-5"
        onClick={addContact}
      >
        Add Random Contact
      </button>
      <button
        className="btn btn-light border-dark mx-1 fs-5"
        onClick={sortByPopularity}
      >
        Sort by Popularity
      </button>
      <button
        className="btn btn-light border-dark mx-1 fs-5"
        onClick={sortByName}
      >
        Sort by Name
      </button>
      <div className="d-flex justify-content-center">
        <table style={{ width: "600px" }}>
          <thead>
            <tr>
              <td className="fs-5 fw-bold">Picture</td>
              <td className="fs-5 fw-bold">Name</td>
              <td className="fs-5 fw-bold">Popularity</td>
              <td className="fs-5 fw-bold">Won Oscar</td>
              <td className="fs-5 fw-bold">Won Emmy</td>
              <td className="fs-5 fw-bold">Actions</td>
            </tr>
          </thead>
          <tbody>
            {contactCelebrities.map((contact) => {
              return (
                <tr className="border border-dark" key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      style={{ width: "80px" }}
                      alt={contact.name}
                    />
                  </td>
                  <td className="fw-bold fs-5">{contact.name}</td>
                  <td className="fs-5">{contact.popularity}</td>
                  {contact.wonOscar ? <td className="fs-2">🏆</td> : <td></td>}
                  {contact.wonEmmy ? <td className="fs-2">🏆</td> : <td></td>}
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteHandler(contact.id);
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
    </div>
  );
}

export default App;
