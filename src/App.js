import contactsFromJson from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  // const firstFive = [...contactsFromJson].splice(0, 5); <= also works
  const firstFive = contactsFromJson.slice(0, 5);
  const [contactsArr, setContacts] = useState(firstFive);

// Iteration 3 | Add New Random Contacts
  const addRandomContacts = () => {
    const randomContact = contactsFromJson[Math.floor(Math.random() * contactsFromJson.length)];
    if (contactsArr.includes(randomContact)) {
      addRandomContacts();
    } else {
      setContacts([...contactsArr, randomContact]);
    }
  }

  // Iteration 4 | Sort Contacts by Name and Popularity


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons-div">
        <button onClick={addRandomContacts}>Add random contact</button>
        <button onClick="">Sort by name</button>
        <button onClick="">Sort by popularity</button>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} className="img"></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🌟' : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
