import React, { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  // Iteration 1 | first 5 contacts.
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  // Iteration 2 | Add Random Contacts not already displayed
  const addRandomContact = () => {
    // Filter contactsData to get contacts that are not already in the list
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );

    // Check if there are any remaining contacts to add
    if (remainingContacts.length > 0) {
      // Generate a random index to select a contact from the remaining contacts array
      const randomContactIndex = Math.floor(
        Math.random() * remainingContacts.length
      );
      // Select a random contact using the random index
      const randomContact = remainingContacts[randomContactIndex];
      // Add the randomly selected contact to the existing contacts list
      setContacts([...contacts, randomContact]);
      // This line updates the state by adding the newly selected random contact to the existing list of contacts, triggering a re-render of the component and updating the UI.
    }
  };

  // Iteration 3 | Sort Contacts by Name and Popularity

  // Define a function named sortByName using arrow function syntax
  const sortByName = () => {
    // Create a new array of contacts by copying the existing contacts array using the spread operator (...)
    const sortedContacts = [...contacts].sort((a, b) =>
      // Sort the contacts alphabetically by the 'name' property using the localeCompare method
      a.name.localeCompare(b.name)
    );
    // Update the state with the sorted array of contacts
    setContacts(sortedContacts);
  };

  // Iteration 4 | Sort Contacts by Name and Popularity
  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort(
      // Create a new array of contacts by copying the existing contacts array using the spread operator (...)
      (a, b) => b.popularity - a.popularity
    );
    // Update the state with the sorted array of contacts
    setContacts(sortedContacts);
  };

  // Iteration 5
  const removeContact = (id) => {
    // Filter the contacts array to remove the contact with the specified id
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    // Update the state with the filtered array of contacts
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="50px" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {/* Iteration 2 | Conditionally Display Awards Info  */}
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>
                  Remove
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
