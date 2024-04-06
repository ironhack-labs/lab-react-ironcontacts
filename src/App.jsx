import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5, contactsJSON.length)
  );

  const addRandomContact = () => {
    const updateRemaining = [...remainingContacts];
    let randomNumber = Math.floor(Math.random() * remainingContacts.length);
    let randomContact = updateRemaining.splice(randomNumber, 1)[0];

    const updateContacts = [...contacts, randomContact];
    setContacts(updateContacts);
    setRemainingContacts(updateRemaining);
  }

  const sortName = () => {
    const updateContacts = [...contacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    })];
    setContacts(updateContacts);
    console.log(contacts)
  }

  const sortPopularity = () => {
    const updateContacts = [...contacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1
      }
      if (a.popularity < b.popularity) {
        return 1
      }
    })]
    setContacts(updateContacts);
    console.log(contacts)
  }

  const deleteContact = (contact) => {
    setContacts([...contacts.filter((c) => c.id !== contact.id)])
    console.log(contacts)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div>
        <button onClick={() => addRandomContact()}>Add random contact</button>
        <button onClick={() => sortName()}>Sort by name</button>
        <button onClick={() => sortPopularity()}>Sort by popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th className="head name">Name</th>
            <th>Popularity</th>
            <th className="head">Won an Oscar</th>
            <th className="head">Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, i) => {
            return (
              <tr key={i}>
                <td>
                  <img className="image" src={contact.pictureUrl}/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar ? <td><i className="fa-solid fa-trophy"></i></td> : <td></td>}
                {contact.wonEmmy ? <td><i className="fa-solid fa-star"></i></td> : <td></td>}
                <td><button onClick={() => deleteContact(contact)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
