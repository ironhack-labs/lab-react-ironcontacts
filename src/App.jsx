import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleAddRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) =>
        !contacts.some((existingContact) => existingContact.id === contact.id)
    );

    if (remainingContacts.length === 0) return;

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts([...contacts, randomContact]);
  };

  const handleSortByPopularity = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const handleSortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="p-5 w-100">
        <h1 className="text-center mb-4">IronContacts</h1>
        <div className="buttons mb-4">
          <button
            onClick={handleAddRandomContact}
            className="btn btn-primary me-2"
          >
            Add Random Contact
          </button>
          <button
            onClick={handleSortByPopularity}
            className="btn btn-secondary me-2"
          >
            Sort by popularity
          </button>
          <button onClick={handleSortByName} className="btn btn-secondary">
            Sort by name
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Won Oscar</th>
                <th scope="col">Won Emmy</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      style={{
                        maxWidth: "100px",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? "🏆" : ""}</td>
                  <td>{contact.wonEmmy ? "🌟" : ""}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteContact(contact.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
