import { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json";

function App() {
  const firstFive = contactsList.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  function addRandomContact() {
    // Filtering out contacts that are already in the state
    const remainingContacts = contactsList.filter(contact => !contacts.includes(contact));
    // Check if there are no more contacts to add
    if (remainingContacts.length === 0) return;
    
    // Generating a random index to pick a contact from the remaining contacts
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    // Picking a random contact
    const newContact = remainingContacts[randomIndex];
    // Creating a new list that includes the new random contact
    const updatedList = contacts.concat(newContact);
    // Updating the state with the new list of contacts
    setContacts(updatedList);
  }

  // Function to sort contacts by popularity
  function sortByPopularity() {
    // Creating a sorted copy of the contacts array by popularity (descending)
    const updatedList = [...contacts].sort((a, b) => b.popularity - a.popularity);
    // Updating the state with the sorted list
    setContacts(updatedList);
  }

  // Function to sort contacts by name
  function sortByName() {
    // Creating a sorted copy of the contacts array by name (alphabetical order)
    const updatedList = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    // Updating the state with the sorted list
    setContacts(updatedList);
  }

  // Function to delete a contact
  function deleteContact(contactId) {
    // Filtering out the contact to be deleted from the list
    const updatedList = contacts.filter(c => c.id !== contactId);
    // Updating the state with the list excluding the deleted contact
    setContacts(updatedList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      
      {/* Button to add a random contact */}
      <button onClick={addRandomContact}>Add Random Contact</button>
      {/* Button to sort contacts by popularity */}
      <button onClick={sortByPopularity}>Sort by popularity</button>
      {/* Button to sort contacts by name */}
      <button onClick={sortByName}>Sort by name</button>

      {/* Table to display the contacts */}
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
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td className="pic">
                {/* Displaying the contact's picture */}
                <img src={contact.pictureUrl} alt={contact.name} width="100" />
              </td>
              {/* Displaying the contact's name */}
              <td>{contact.name}</td>
              {/* Displaying the contact's popularity to one decimal place */}
              <td>{contact.popularity.toFixed(1)}</td>
              {/* Displaying trophy if the contact won an Oscar */}
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              {/* Displaying star if the contact won an Emmy */}
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              {/* Button to delete the contact */}
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;