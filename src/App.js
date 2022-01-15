import './App.css';
import contacts from "./contacts.json";
import React, { useState } from 'react';

function App() {
  const [producerContacts, setContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 1));
    const newContacts = [...producerContacts, contacts[randomIndex]];

    // For not repeat a contact
    if (!producerContacts.includes(contacts[randomIndex])) {
      setContacts(newContacts);
    } else {
      addRandomContact();
    }
  };

  function sortNames() {
    let newContacts = [...producerContacts]
    let nameArray = newContacts.sort((a,b) => {
      if(a.name > b.name){
        return -1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    setContacts(nameArray)
  };

  const sortByPopularity = () => {
    const sortPopularity = [...producerContacts].sort((a, b) => b.popularity - a.popularity);

    setContacts(sortPopularity);
  };

  const deleteContact = id => {
    const newContacts = [...producerContacts].filter(contact => contact.id !== id);

    setContacts(newContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1><br />
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortNames}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        </thead>
        {producerContacts.map(contact => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td><img src={contact.pictureUrl} alt={contacts.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default App;