import "./App.css";
import contacts from './contacts.json';
import { useState } from "react";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => !contactList.includes(contact));
    
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContactList([...contactList, randomContact]);
    } else {
      alert("No hay más contactos para agregar");
    }
  };
  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedContacts);
  };
  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedContacts);
  };
  const deleteContact = (contactId) => {
    const updatedContacts = contactList.filter(contact => contact.id !== contactId);
    setContactList(updatedContacts);
  };



  return (
    <div className="App">
      <h1>Contacts</h1>
      <button onClick={addRandomContact}>Agregar contacto aleatorio</button>
      <button onClick={sortByName}>Ordenar por nombre</button>
      <button onClick={sortByPopularity}>Ordenar por popularidad</button>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} width="50" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
