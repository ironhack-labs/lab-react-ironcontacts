import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  // Start with the first 5 contacts
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0, 5));

  // Function to add a random contact (not repeated)
  const addRandomContact = () => {
    // Get only the contacts that are not already displayed
    const remainingContacts = contacts.filter(
      (contact) => !displayedContacts.some((dc) => dc.id === contact.id)
    );
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setDisplayedContacts([...displayedContacts, randomContact]);
    }
  };

  // Function to delete a contact by its id
  const deleteContact = (id) => {
    // Create a new array without the contact that has the matching id
    const updatedContacts = displayedContacts.filter((contact) => contact.id !== id);
    // Update the state with the new array
    setDisplayedContacts(updatedContacts);
  };


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <thead>
          <tr className="categories">
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px", height: "auto" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRandomContact}>Add Random Contact</button>
    </div>
  );
}

export default App;
