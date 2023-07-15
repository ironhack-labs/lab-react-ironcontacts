import './App.css';
import contactsData from './contacts.json';
import React, { useState } from 'react';

function App() {
// Create a atate variable 'contacts' ==> the initial value is set to an array containing first 5 contacts. 
  const [contacts, setContacts] = useState(() => contactsData.slice(0, 5));

  // Generate a random index and update contacts state by adding the random contact
  const randomContacts = () => {
    // Remove the first 5 contacts from the data
    const remainingContacts = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

// Update the contacts state by adding the random contact
    setContacts(prevContacts => [...prevContacts, randomContact]);
    // setContacts: This is the state updater function provided by the useState hook. It is used to update the contacts state variable.
    // (prevContacts => [...prevContacts, randomContact]): This is an arrow function that defines the new state value for contacts. It takes the previous state (prevContacts) as a parameter and returns the updated state value.
    // prevContacts: It represents the previous state value of contacts. It's the value that was passed to setContacts before the update.
    // ...prevContacts: The spread operator (...) is used to create a new array that contains all the elements of the previous state prevContacts. It creates a shallow copy of the prevContacts array.
    // , randomContact: It appends the randomContact to the end of the new array. The randomContact is the contact object randomly selected from the contactsData.
  }

  // Sort by name
  const sortByName = () => {
    const sortedContacts = contacts.slice().sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    });

    setContacts(sortedContacts);
  }

  // Sort by popularity
  const sortByPopularity = () => {
    const sortedContacts = contacts.slice().sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      } else if (a.popularity < b.popularity) {
        return 1
      } else {
        return 0
      }
    });

    setContacts(sortedContacts);
  }

  // Notes:
  // const sortedContacts:
  // 1. Variable scope - The sortedContacts variable is declared inside the function scope of sortByName and sortByPopularity. Since it is declared using const, its scope is limited to those functions. This means that the variable is created when the functions are invoked and is accessible only within those functions.
  // 2. Block Scope: JavaScript has block-level scoping, which means that variables declared with const or let are only accessible within the block (a set of curly braces {}) where they are defined. In this case, the block is the body of the sortByName and sortByPopularity functions.
  // 3. Function Invocation: When the sortByName or sortByPopularity functions are called, a new instance of the sortedContacts variable is created within the function's block scope. This new variable does not conflict with any other variables in the surrounding scope or cause any errors.
  // slice() method is used to create a copy of the contacts array

// Delete contacts
const deleteContact = contactId => {
  const filteredContacts = contacts.filter(contact => {
    return contact.id !== contactId;
  });

  setContacts(filteredContacts);
};
// Notes:
// 1. The function deleteContact takes a parameter contactId, which represents the ID of the contact i want to delete.
// 2. Inside the function, a new variable filteredContacts is declared, it will hold the updated list of contacts after the deletion.
// 3. The filter method is called on the contacts array. The filter method creates a new array by iterating over each contact in the original array (contacts) and applying a filtering condition.
// 4. An arrow function is used to compare the id property of each contact with the contactId parameter. The arrow function takes each contact as an argument and returns true if the contact's id is not equal to the contactId parameter, and false otherwise.
// 5. The filter method creates a new array (filteredContacts) that contains only the contacts that satisfy the filtering condition. In other words, it removes the contact with the matching contactId from the array.
// 6. the setContacts function is called with the filteredContacts array as an argument. This updates the state variable contacts with the new array of contacts. The component will re-render, and the table will reflect the updated list of contacts without the deleted contact.

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <button onClick={randomContacts}>Add Random Contacts</button>
    <button onClick={sortByPopularity}>Sort by popularity</button>
    <button onClick={sortByName}>Sort by name</button>
      <table className='contacts-container'>
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
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td><img className='img-contact' src={contact.pictureUrl} alt={contact.name} /></td>
            <td>{contact.name}</td>
            <td>{(contact.popularity).toFixed(2)}</td>
            <td>{contact.wonOscar ? '🏆' : '' }</td>
            <td>{contact.wonEmmy ? '🏆' : ''}</td>
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;
