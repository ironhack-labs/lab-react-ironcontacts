import "./App.css";
import React, { useState } from 'react'
import contacts from "./contacts.json"


function App() {
  /* Strange problem: if I use the count, the re-rendering of changes done with setContactsArray works ok.
  If I dont use count, the contactsArray is being updated correctly, but doesnt get re-rendered
  */
  const [contactsArray, setContactsArray] = useState(contacts.slice(0, 5));
  const [count, setCount] = useState(0);

  const addRandomContact = () => {
    let remainingContacts = contacts.filter(a => !contactsArray.some(b => b.id == a.id));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    let tempArray = contactsArray;
    tempArray.push(randomContact);
    setContactsArray(tempArray);
    setCount(count + 1)
  }

  function sortByName() {
    let sortedArray = [...contactsArray].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    setContactsArray(sortedArray);
  }

  function sortByPopularity() {
    let sortedArray = [...contactsArray].sort((a, b) => b.popularity - a.popularity);
    setContactsArray(sortedArray);
  }

  const deleteContact = (id) => {
    let tempArrayWithoutContact = contactsArray.filter(contact => contact.id != id)
    setContactsArray(tempArrayWithoutContact)
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <h2>Iron Contacts</h2>
      <button onClick={() => addRandomContact()}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <h3>Random contacts added: {count}</h3>
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
          {contactsArray.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="Contacts picture" className="logo" /></td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              {contact.wonOscar ?
                (<td>🏆</td>)
                :
                (<td></td>)
              }
              {contact.wonEmmy ?
                (<td>🌟</td>)
                :
                (<td></td>)
              }
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div >
  );
}

export default App;
