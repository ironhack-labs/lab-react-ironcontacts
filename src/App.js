import React, { useState } from 'react'
import './App.css';
import contacts from './contacts.json'

const App = () => {
  //Iteration 1 | Display 5 Contacts
  const fiveContacts = contacts.slice(0, 5);
  const [contactsState, setcontactsState] = useState(fiveContacts);

  //Iteration 2 | Add New Random Contacts
  const addRandomContacts = () => {
    const randomContacts = Math.floor(Math.random() * contacts.length);
    const contactsStateCopy = [...contactsState];
    contactsStateCopy.push(contacts[randomContacts]);
    setcontactsState(contactsStateCopy);
  }

  //Iteration 3 a | Sort Contacts By Name
  const sortByName = () => {
    const contactsStateCopy = [...contactsState];

    contactsStateCopy.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
    setcontactsState(contactsStateCopy);
  }

  //Iteration 3 b | Sort Contacts By Popularity
  const sortByPopularity = () => {
    const contactsStateCopy = [...contactsState];

    contactsStateCopy.sort(function (a, b) {
      if (a.popularity < b.popularity)
        return -1;
      if (a.popularity > b.popularity)
        return 1;
      return 0;

    });
    setcontactsState(contactsStateCopy);
  }

  //Iteration 4 | Remove Contacts
  const removeContacts = (id) => {
    const contactsStateCopy = [...contactsState];

    const index = contactsStateCopy.findIndex((contact) => contact.id === id);
    contactsStateCopy.splice(index, 1);
    setcontactsState(contactsStateCopy);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttonsContainer">
        <button onClick={() => addRandomContacts()}>Add Random Contact</button>
        <button onClick={() => sortByName()}>Sort by name</button>
        <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      </div>

      <div className="tableofContacts">
        <table>

          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contactsState.map(item => (
              <tr>
                <td> <img src={item.pictureUrl} className="pictures" alt="img" /> </td>
                <td> {item.name} </td>
                <td> {item.popularity.toFixed(2)} </td>
                <td> <button onClick={() => removeContacts(contacts.id)}> Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  )

};

export default App;
