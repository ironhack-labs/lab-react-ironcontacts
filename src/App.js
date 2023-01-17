import contactsFromJson from "./contacts.json";
import "./App.css";
import { useState } from "react";
import './fonts/Limelight/Limelight-Regular.ttf'

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
  // Sort by name
  const sortByName = () => {
    const sortedContacts = [...contactsArr].sort((a, b) => {
      if (a.name < b.name) return -1
      else if (a.name > b.name) return 1
      else return 0
    })
    setContacts(sortedContacts)
  }

  // Sort by popularity
  const sortByPopularity = () => {
    const sortedContacts = [...contactsArr].sort((a, b) => {
      if (a.popularity < b.popularity) return 1
      else if (a.popularity > b.popularity) return -1
      else return 0
    })
    setContacts(sortedContacts)
  }

  // Iteration 5 | Remove Contacts
  const removeContact = (id) => {
    const newContactList = contactsArr.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  return (
    <div className="App">
      <div className="title">
      <h1>IronContacts</h1>
      </div>
      <div className="buttons-div">
        <button onClick={addRandomContacts}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>
      <div className="table-div">
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} className="img"></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🌟' : ''}</td>
                <td><button className="delete-btn" onClick={() => removeContact(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
