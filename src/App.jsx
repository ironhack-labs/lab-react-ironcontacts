import { useState } from "react";
import "./App.css";
import contactList from "./contacts.json"

function App() {
  const [contacts,setContacts] = useState(contactList.splice(0,5))
  console.log(contacts);
  console.log(contactList);

  function pickRandomContact(min,max) {
    let randomizer = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomizer);
    let selectedContact = contactList.splice(randomizer,1);
    console.log('selected contact'+selectedContact[0].name);
    setContacts([selectedContact[0],...contacts]);
    return selectedContact;
  }

  function sortByPopularity () {
    setContacts(contacts.toSorted((a,b) => b.popularity - a.popularity))
  }
  
  function sortByName () {
    setContacts(contacts.toSorted((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => {
      return contact.id !== id
    }))


  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={() => {pickRandomContact(0,contactList.length-1)}}>
        Add Random Contact
      </button>

      <button onClick={sortByPopularity}>
        Sort by popularity
      </button>

      <button onClick={sortByName}>
        Sort by name
      </button>

      <table>
        <thead>
          {/* <tr>
            <th colSpan="3">IronContacts</th>
          </tr> */}
          <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Won an Oscar</th>
          <th scope="col">Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => {
          return <tr key={contact.id}>
          <td><img src={contact.pictureUrl} alt="" /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? "🏆": null}</td>
          <td>{contact.wonEmmy ? "🏆": null}</td>
          <td><button onClick={() => {deleteContact(contact.id)}}>Delete</button></td>
        </tr>
        })}
        </tbody>
      </table>
    </div>
  );




}

export default App;
