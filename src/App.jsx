import React, { useState } from "react";
import "./App.css";
import "./index.css";
import contacts from "./contacts.json";

function App() {
  // Defining the App component

  const [contactList, setContactList] = useState(contacts.slice(0, 5)); // Using the useState hook to initialize the contactList state with the first 5 contacts from the imported data

  const addRandomContact = () => {
    // Function to add a random contact to the contactList state

    const remainingContacts = contacts.filter(
      (contact) => !contactList.includes(contact)
    ); // Filtering out the contacts that are already in the contactList

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)]; // Selecting a random contact from the remainingContacts array
    setContactList([...contactList, randomContact]); // Updating the contactList state by adding the randomContact
  };

  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    ); // Creating a new array of contacts sorted by name using the localeCompare method
    setContactList(sortedContacts); // Updating the contactList state with the sortedContacts
  };

  const sortByPopularity = () => {
    // Function to sort the contactList by popularity

    const sortedContacts = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    ); // Creating a new array of contacts sorted by popularity in descending order
    setContactList(sortedContacts); // Updating the contactList state with the sortedContacts
  };
  const deleteContact = (id) => {
    // Function to delete a contact from the contactList
    const updatedContactList = contactList.filter(
      (contact) => contact.id !== id
    ); // Filtering out the contact with the given id from the contactList
    setContactList(updatedContactList); // Updating the contactList state with the updatedContactList
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact} className="btn-create">
        Add Random Contact
      </button>

      <button onClick={sortByName} className="btn-sort">
        Sort by Name
      </button>

      <button onClick={sortByPopularity} className="btn-sort">
        Sort by Popularity
      </button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(
            (
              contact // Mapping through the contactList to display each contact as a table row
            ) => (
              
              <tr key={contact.id} className="contactCard">

                <td>
                <img src={contact.pictureUrl} alt={contact.name} class="contact-image" />
                </td>
                <td>{contact.name}</td>
                <td>{Math.floor(contact.popularity)}</td>
                <td>{contact.wonOscar ? "🏆" : "nein"}</td>
                <td>{contact.wonEmmy ? "🏆" : "nop"}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
export default App;
