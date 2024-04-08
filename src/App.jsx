import "./App.css";
import { useState } from "react";
import contactsData from './contacts.json';


function App() {

  const [ contacts, setContacts ] = useState(contactsData.slice(0, 5));


  const handleRandomContact = () => {
    const remainingContacts = Math.floor(Math.random() * contactsData.length)
    const randomContact = contactsData[remainingContacts]

    setContacts([...contacts, randomContact])
  }

  const handleSortPopularity = () => {
    setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
  }

  const handleSortName = () => {
    setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))]);
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={handleRandomContact}>Add Random Contact</button>
      <button onClick={handleSortPopularity}>Sort by Popularity</button>
      <button onClick={handleSortName}>Sort by Name</button>

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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} className="contact-img" style={{ width: '100px'}} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ' '}</td>
              <td>{contact.wonEmmy ? '🌟' : ' '}</td>
              <td><button onClick={() =>handleDelete(contact.id)}>Delete</button></td>
            </tr>
          )
        )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
