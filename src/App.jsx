import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
function App() {
  const [shownContacts, setShownContacts] = useState(contacts.slice(0, 5));
  const [otherContacts, setotherContacts] = useState(contacts.slice(5));

  const addRandomContact = () => {
    if (otherContacts.length === 0) {
      alert('¡No more Artist!');
      return;
    }
    const randomIndex = Math.floor(Math.random() * otherContacts.length);
    const randomContact = otherContacts[randomIndex];

    setShownContacts([...shownContacts, randomContact]);
    setotherContacts(otherContacts.filter((_, index) => index !== randomIndex));
  };

  //Function para ordenar Contacts//
  function sortByKey(array, key) {
    return array.slice().sort((a, b) => {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    });
  }
  //Aplicamos método Sort de la función//
  function sortByName() {
    const sortedContacts = sortByKey(shownContacts, "name");
    setShownContacts(sortedContacts);
  }
  function sortByPopularity() {
    const sortedContacts = sortByKey(shownContacts, "popularity");
    setShownContacts(sortedContacts);
  }

  //Delete Contacts//
  function deleteContact(name) {
    const updatedContacts = shownContacts.filter(contact => contact.name !== name);
    setShownContacts(updatedContacts);
  }
  return (
    <div>
      <h1>Lista de Actores</h1>
      <button onClick={addRandomContact}>Add Random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      
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
          {shownContacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img className="contact-image" src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td>
                <button onClick={() => deleteContact(contact.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
