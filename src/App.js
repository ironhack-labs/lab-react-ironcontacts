import "./App.css";
import contactsDetails from "./contacts.json";
import { useState } from "react";


function App() {
  const [contacts, setContacts] = useState(contactsDetails.slice(0, 5));
  const [leftContacts, setleftContacts] = useState(contactsDetails.slice(5, contactsDetails.length))

  function addRandomContact() {
    const updateLeftContacts = [...leftContacts];
    let randomNum = Math.floor(Math.random() * leftContacts.length);
    let randomContact = updateLeftContacts.splice(randomNum, 1)[0];
    const updateContacts = [...contacts, randomContact];
    setContacts(updateContacts);
    setleftContacts(updateLeftContacts);
  }

  function sortByPopularity() {
    const toSortPopularity = [...contacts];
    const sortedByPopularity = toSortPopularity.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  }

  function sortByName() {
    const SortName = [...contacts];
    const sortedByName = SortName.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  }

  function deleteContact(index) {
    const deletedContact = [...contacts];
    deletedContact.splice(index, 1);

    setContacts(deletedContact);
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>

         
            <button onClick={() => addRandomContact()}>Add Random Contact</button>
           <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
           <button onClick={() => sortByName()}>Sort by Name</button>
          
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => (
            <tr key={id}>
              <td>
                <img class= "imageStyle" src={contact.pictureUrl} alt={contact.name}/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <button onClick={() => deleteContact()}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;