import "./App.css";
import { useState } from "react";
import contacts from './contacts.json';

function App() {

  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

  function addRandom() {
    let sortedArray = [...firstFive];
    let newRandomContact = Math.floor(Math.random() * contacts.length);
    let addRandom = contacts[newRandomContact];
    sortedArray.push(addRandom)

    if (firstFive.length < 5) {
      setFirstFive(sortedArray)
    }
  }

  function sortPopularity() {
    let sortedArray = [...firstFive].sort((a, b) => b.popularity - a.popularity);

    setFirstFive(sortedArray);
  }

  function sortName() {
    let sortedArray = [...firstFive].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    setFirstFive(sortedArray);
  }

  const deleteContact = (contactId) => {
    const filteredContacts = firstFive.filter((contact) => {
      return contact.id !== contactId
    });
    setFirstFive(filteredContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={function() {addRandom()}}>Add Random Contact</button>
      <button onClick={function() {sortPopularity()}}>Sort by popularity</button>
      <button onClick={function() {sortName()}}>Sort by name</button>
      <button onClick={() => window.location.reload()}>Reset List</button>

      <table>
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
          {firstFive.map(function(contact) {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} className="logo" /></td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🌟' : ''}</td>
                <td><button onClick={function() {deleteContact(contact.id)}}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
