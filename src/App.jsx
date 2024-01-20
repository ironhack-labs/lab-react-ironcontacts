import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";


function App() {
  const [restContacts, setRestContacts] = useState(contacts.slice(5))
  const [displayedContacts, setDisplayedContacts] = useState(contacts.slice(0, 5));

  const AddRandomContact = () => {
    if (restContacts.length === 0) {
      return alert('No hay mas contactos que añadir');
    }
  
    const randomIndex = Math.floor(Math.random() * restContacts.length)
    setRestContacts(restContacts.filter((contact, index) => index !== randomIndex));
  
    const itemToAdd = contacts[randomIndex];
    setDisplayedContacts([itemToAdd, ...displayedContacts])
  }
  const SortByPopularity = () => {
    const sortedPopularity = [...displayedContacts].sort((a, b) =>  (b.popularity-a.popularity));
    setDisplayedContacts(sortedPopularity);
  }
  const SortByName = () => {
    const sortedNames = [...displayedContacts].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedContacts(sortedNames);
  }
  const deleteContact = (id) => {
    const newArr = displayedContacts.filter((displayedContact) => {
      return displayedContact.id !== id
    })
    setDisplayedContacts(newArr);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button  onClick={AddRandomContact}>Add random contact</button>
      <button  onClick={SortByPopularity}>Sort by popularity</button>
      <button  onClick={SortByName}>Sort by name</button>
      <table id="contactsTable">

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        <tbody >
          {displayedContacts.map((contact) => (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="Imagen Contacto" width="90px" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <p>🏆</p> : ""}</td>
              <td>{contact.wonEmmy ? <p>🌟</p> : ""}</td>
              <td><button c onClick={() => deleteContact(contact.id)}>Borrar</button></td>
            </tr>
            
          ))
          }
        </tbody>
      </table>
    </div>

  );
}

export default App;
