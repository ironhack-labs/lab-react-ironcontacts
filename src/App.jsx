import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  function AddNewContact() {
    const RandomContact = Math.floor(Math.random() * contacts.slice(5).length)
    const newContact = contacts[RandomContact]
    return setContactList((prev) => [...prev, newContact])
  }

  // sorting by name 
  function sortByName() {
    const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedContacts);
  }
  // sort by popularity
  function sortByPopularity() {
    const sortedContacts = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedContacts);
  }
  //delete cont
  function deleteContact(id) {
    const updatedList = contactList.filter(contact => contact.id !== id);
    setContactList(updatedList)
  }
  return (
    <div >
      <h1>LAB | React IronContacts</h1>
      <button onClick={AddNewContact}><h4>Add New Contact</h4></button>
      <button onClick={sortByName}><h4>Order Contact By name</h4></button>
      <button onClick={sortByPopularity}><h4>Order Contact By Popularity</h4></button>
      <table>
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
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} style={{ width: '30px', height: '30px' }} alt="contact pic" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ""}</td>
              <td>{contact.wonEmmy ? '🌟' : ""}</td>
              <td><button onClick={() => deleteContact(contact.id)}><h5>Delete contact</h5></button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
