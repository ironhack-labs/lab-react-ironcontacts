import "./App.css";
import { useState } from "react";
import contactData from "./contacts.json";

function App() {

  const [contacts, setContact] = useState(contactData.slice(0,5))

  const randomContact = () => {

    const newContacts = contactData.filter((contact) => {
      return !contacts.includes(contact);
    });
    
    const randomIndex = Math.floor(Math.random()* newContacts.length)
    const randomContactFinder = newContacts[randomIndex]
    setContact([...contacts,randomContactFinder])

  }

  const sortByName = () => {
      const sortedByname = [...contacts].sort((a,b) => a.name.localeCompare(b.name))
      setContact(sortedByname)
  }
  const sortByPopularity = () => {
    const sortedByPopularity = [...contacts].sort((a,b) => b.popularity - a.popularity)
    setContact(sortedByPopularity)
}

  const deleteContact = (contactId) => {
    const filtredContact = contacts.filter((contact)=> contact.id !== contactId)
    setContact(filtredContact)
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={randomContact}>Random</button>
      <button onClick={sortByName}>by name</button>
      <button onClick={sortByPopularity}>by popularity</button>
      <table>
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
        {contacts.map(contact => (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl} className="logo"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar && <p>🏆</p>}</td>
          <td>{contact.wonEmmy && <p>🌟</p>}</td>
          <td><button onClick={() => deleteContact(contact.id)}>delete</button></td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
