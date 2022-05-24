import contacts from "../src/contacts.json";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [fiveContacts, setFiveContacts] = useState(contacts.slice(0, 5));

  const addContact = (contactAdded) => {
    const newContact =
      contacts[Math.floor(Math.random() * fiveContacts.length)];
    setFiveContacts([newContact, ...fiveContacts]);
  };

  const sortedBtn = () => {
    setFiveContacts([
      ...fiveContacts.sort((a, b) => a.name.localeCompare(b.name)),
    ]);
  };


  const sortPopl = () => {
    setFiveContacts([...fiveContacts.sort((a, b) => b.popularity - a.popularity)])
  }

  const deleteContact = (contactId) => {
    const filteredContacts = fiveContacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setFiveContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add random contact</button>
      <button onClick={sortedBtn}>Sort by name</button>
      <button onClick={sortPopl}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

        {fiveContacts.map((el) => {
          return (
            <tr>
              <td>
                <img className="pics" src={el.pictureUrl} alt="" />
              </td>
              <td>
                <p>{el.name}</p>
              </td>
              <td>
                <p>{Math.round(el.popularity)}</p>
              </td>
              <td>{el.wonOscar ? <p>🏆</p> : <p></p>}</td>
              <td>{el.wonEmmy ? <p>🏆</p> : <p></p>}</td>
              <td><button onClick={() => {deleteContact(el.id)}}>Delete</button></td>
              {console.log(deleteContact)}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
