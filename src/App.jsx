import React, { useState } from "react";
import "./App.css";
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 6));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(6));

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
     
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);


      const randomContact = remainingContacts[randomIndex];


      setContacts(prevContacts => [...prevContacts, randomContact]);
      setRemainingContacts(prevRemainingContacts => {
        const updatedRemainingContacts = [...prevRemainingContacts];
        updatedRemainingContacts.splice(randomIndex, 1);
        return updatedRemainingContacts;
      });
    } else {
      alert("No hay más contactos disponibles.");
    }
  };


  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };


  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };




  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <h2>IronContact</h2>
      <button onClick={addRandomContact}>Agregar contacto aleatorio</button>

      <button onClick={sortByName}>Ordenar por Nombre</button>

      <button onClick={sortByPopularity}>Ordenar por Popularidad</button>

      <table className="contacts-table">
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
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt={contact.name} className="contact-image" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : null}</td>
              <td>{contact.wonEmmy ? "🌟" : null}</td>
              <td><button onClick={() => handleDeleteContact(contact.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
