import "./App.css";
import contactsData from "./contacts.json";
import { useState } from 'react';

function App() {
  // Slice the first five contacts from the contactsData array
  const fivePeople = contactsData.slice(0,5);

  // Set up state using the useState hook, initial state is the first five contacts
  const [contactsToDisplay, setContacts] = useState(fivePeople); 

  // Function to add a random contact from the remaining contacts
  const addRandomContact = () => {
    // Get the remaining actors from the contactsData array
    const remainingActors = contactsData.slice(5);
    // Generate a random index within the remainingActors array length
    const randomActorIndex = Math.floor(Math.random() * remainingActors.length);
    // Select the random actor from the remainingActors array
    const randomActor = remainingActors[randomActorIndex];
    // Update the contactsToDisplay state by adding the random actor at the beginning
    setContacts((previousState) => [randomActor, ...previousState]);
  }

  // Function to sort the contacts by popularity
  const sortByPopularity = () => {
    // Create a new array sorted by popularity
    const byPopularity = [...contactsData].sort((a,b) => b.popularity - a.popularity);
    // Update the contactsToDisplay state with the sorted array
    setContacts(byPopularity);
  }

  // Function to sort the contacts by name
  const sortByName = () => {
    // Create a new array sorted by name
    const byName = [...contactsData].sort((a,b) => a.name.localeCompare(b.name));
    // Update the contactsToDisplay state with the sorted array
    setContacts(byName);
  }

  // Function to delete a contact based on the provided contactId
  const deleteContact = (contactId) => {
    // Filter out the contact with the provided contactId
    const updatedContacts = contactsToDisplay.filter(contact => {
      return contact.id !== contactId;
    });
    // Update the contactsToDisplay state with the filtered array
    setContacts(updatedContacts);
  }

  // Return the JSX elements to be rendered
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      {/* Buttons for various actions */}
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      {/* Contact table section */}
      <div className="contactTable">
        <table>
          <thead>
            {/* Table headers */}
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th> 
              <th>Won Emmy</th>
              <th>Actions</th> {/* Added Action header */}
            </tr>
          </thead>
          <tbody>
            {/* Map through each contact and render a table row */}
            {contactsToDisplay.map((contact, index) => (
              <tr key={index}>
                {/* Display contact details in each column */}
                <td><img src={contact.pictureUrl} alt={contact.name} /></td> 
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : null}</td> {/* Adjusted ternary operation */}
                <td>{contact.wonEmmy ? <p>🌟</p> : null}</td> {/* Adjusted ternary operation */}
                <td>
                  {/* Button to delete a contact */}
                  <button onClick={() => deleteContact(contact.id)} className="btn-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
