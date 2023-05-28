import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0,5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));

  const addRandomContact = () => {

    if(remainingContacts.length> 0){

      const randomIndex = Math.floor(Math.random()* remainingContacts.length);
      const randomContact= remainingContacts[randomIndex];

      setContacts((prevContacts) => [...prevContacts, randomContact]);

      const updatedRemainingContacts=[...remainingContacts];
      updatedRemainingContacts.splice(randomIndex,1);
      setRemainingContacts(updatedRemainingContacts);
     
    }
  }

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (

<div className="App">
  <h1>IronContacts</h1>
  <div className="buttons">
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortByName}>Sort By Name</button>
    <button onClick={sortByPopularity}>Sort By Popularity</button>
  </div>
  <table className="contacts-table">
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact) => (
        <tr key={contact.id}>
          <td>
            <img className="contact-picture" src={contact.pictureUrl} alt={contact.name} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar ? "🏆" : null}</td>
          <td>{contact.wonEmmy ? "🏆" : null}</td>
          <td>
            <button className="delete-button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

export default App;
